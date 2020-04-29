const express = require('express');
const app = express();
const routes = express.Router();

// db connection
const db = require('../db');

// auth
const {authenticateJWT} = require('../shared/auth');


// model
let Post = require('../models/post');

// validation rule
const { validationRules, validate, getFilters } = require('../validation/post.js')

// get single
app.get('/:id', (req, res) => {
  Post.findById(req.params.id)
  .then((item) => res.json({result: 'SUCCESS', item: item}))
  .catch(err => res.status(400).json('Error: ' + err))
});

// get all
app.get('/', (req, res) => {

  // get filters
  let filters = searchFilter(req);

  // pagination param
  var perPage = 10
  var page = req.query.page || 1

  // get data
  Post.find(filters)
  .skip((perPage * page) - perPage)
  .limit(perPage)
  .exec(function(err, items) {
            Post.count(filters).exec(function(err, count) {
                if (err) return next(err)

                var start = perPage * page - perPage + 1
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
app.post('/', authenticateJWT, validationRules(), validate, function(req, res){

    console.log('posting req', req.body)

    const date = req.body.date;
    const title = req.body.title;
    const content = req.body.note;
    const userId = req.body.userId;

    const newPost = new Post({
      date, title, content, userId
    })

    newPost.save()
    .then((item)=>res.status(200).json({result: 'SUCCESS', item: item}))
    .catch(err => res.status(400).json('Error: ' + err))
})


// update post
app.put('/:id', validationRules(), validate, function(req, res){

  Post.findById(req.params.id)
  .then(item => {
    item.title = req.body.title;
    item.content = req.body.note;
    item.date = req.body.date;

    item.save()
    .then((item) => res.json({result: 'SUCCESS', item: item}))
    .catch(err => res.status(400).json('Error: ' + err))
  })
  .catch(err => res.status(400).json('Error: ' + err))

})

// delete single
app.delete('/:id', (req, res) => {
  Post.findByIdAndDelete(req.params.id)
  .then(()=>res.json({result: 'SUCCESS', message:'Post deleted successfully'}))
  .catch(err => res.status(400).json('Error: ' + err));
});

// search filters
const searchFilter = (req) => {
  var query = {};

  // filter title
  if(req.query.filterName){
    query["title"] = new RegExp(req.query.filterName, 'i')
  }

  // filter content
  if(req.query.filterNote){
    query["content"] = new RegExp(req.query.filterNote, 'i')
  }

  // filter dateFrom
  if(req.query.filterDateFrom){
    query["date"] = {$gte : req.query.filterDateFrom};
  }

  // filter dateTo
  if(req.query.filterDateTo){
    query["date"] = {$lte : req.query.filterDateTo};
  }

  // filter dateFrom & dateTo
  if(req.query.filterDateFrom && req.query.filterDateTo){
    query["date"] = {$gte : req.query.filterDateFrom, $lte : req.query.filterDateTo};
  }


  return query;
}

module.exports = app;
