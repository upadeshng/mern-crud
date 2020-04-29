const express = require('express');
const app = express();
const routes = express.Router();

// db connection
const db = require('../db');

// model
let Comment = require('../models/comment');
let Post = require('../models/post');

// validation rule
const { validationRules, validate, getFilters } = require('../validation/comment.js')

// get single
app.get('/:id', (req, res) => {
  Comment.findById(req.params.id)
  .then((item) => res.json({result: 'SUCCESS', item: item}))
  .catch(err => res.status(400).json('Error: ' + err))
});


// get all
app.get('/:id', (req, res) => {

  // get filters
  let filters = searchFilter(req);

  // filter with given post id
  filters["postId"] = req.params.id

  // pagination param
  var perPage = 10
  var page = req.query.page || 1

  // get data
  Comment.find(filters)
  .skip((perPage * page) - perPage)
  .limit(perPage)
  .exec(function(err, items) {
            Comment.count(filters).exec(function(err, count) {
                if (err) return next(err)

                var start = perPage * page - perPage + 1
                    left = count - start
                    expectEnd = start + perPage - 1,
                    end = expectEnd > count ? count : expectEnd;

                res.json({result: 'SUCCESS',
                  items: items,
                  pagination: {
                    currentPage: page,
                    itemCount: count,
                    start: start,
                    end: end,
                    pageSize: perPage,
                    noShowPagination: count <= perPage ? true : false
                  } })

            })
        })
});


// post
app.post('/:id', validationRules(), validate, function(req, res){

    console.log('posting req', req.body)
    const {postId, content, userId} = req.body

    const newComment = new Comment({
      postId, content, userId
    })

    newComment.save()
    .then( comment =>{

      // find post 
      Post.findById(comment._id)
      .then((post)=>res.json({result: 'SUCCESS', item: comment, post: post}))
      
    })
    .catch(err => res.status(400).json('Error: ' + err))
})


// update
app.put('/:id', validationRules(), validate, function(req, res){

  Comment.findById(req.params.id)
  .then(item => {
    item.content = req.body.content;

    item.save()
    .then((item) => res.json({result: 'SUCCESS', item: item}))
    .catch(err => res.status(400).json('Error: ' + err))
  })
  .catch(err => res.status(400).json('Error: ' + err))

})


// delete
app.delete('/:id', (req, res) => {
  Comment.findByIdAndDelete(req.params.id)
  .then(()=>res.json({result: 'SUCCESS', message:'Comment deleted successfully'}))
  .catch(err => res.status(400).json('Error: ' + err));
});


// search filters
const searchFilter = (req) => {
  var query = {};
  // filter content
  if(req.query.filterContent){
    query["content"] = new RegExp(req.query.filterContent, 'i')
  }

  // filter dateFrom
  if(req.query.filterDateFrom){
    query["createdAt"] = {$gte : req.query.filterDateFrom};
  }

  // filter dateTo
  if(req.query.filterDateTo){
    query["createdAt"] = {$lte : req.query.filterDateTo};
  }

  // filter dateFrom & dateTo
  if(req.query.filterDateFrom && req.query.filterDateTo){
    query["createdAt"] = {$gte : req.query.filterDateFrom, $lte : req.query.filterDateTo};
  }


  return query;
}

module.exports = app;
