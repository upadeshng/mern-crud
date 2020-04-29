const express = require('express');
const app = express();
const routes = express.Router();

// db connection
const db = require('../db');

// auth
const {authenticateJWT} = require('../shared/auth');


// model
let User = require('../models/user');

// validation rule
const { validationRules, validate, getFilters } = require('../validation/user.js')

// get profile
app.get('/profile', authenticateJWT, (req, res) => {
  
  // console.log(req.authData.user[0]._id)
  User.findById(req.user._id)
  .then((user) => res.json({result: 'SUCCESS', user: user}))
  .catch(err => res.status(400).json('Error: ' + err))

});


// get single
app.get('/:id', (req, res) => {
  User.findById(req.params.id)
  .then((item) => res.json({result: 'SUCCESS', item: item}))
  .catch(err => res.status(400).json('Error: ' + err))
});

// get all
app.get('/', authenticateJWT, (req, res) => {

  // get filters
  let filters = {};//searchFilter(req);

  // pagination param
  var perPage = 10
  var page = req.query.page || 1

  // get data
  User.find(filters)
  .skip((perPage * page) - perPage)
  .limit(perPage)
  .exec(function(err, items) {
            User.count(filters).exec(function(err, count) {
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
app.post('/', validationRules(), validate, function(req, res){

    console.log('posting req', req.body)

    const name = req.body.name;
    const address = req.body.address;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    const newUser = new User({
      name, address, email, username, password
    })

    newUser.save()
    .then((item)=>res.status(200).json({result: 'SUCCESS', item: item}))
    .catch(err => res.status(400).json('Error: ' + err))
})


// update
app.put('/:id', authenticateJWT, validationRules(), validate, function(req, res){

  console.log('posting', req.body)
  
  User.findById(req.params.id)
  .then(item => {
    item.name = req.body.name;
    item.address = req.body.address;
    item.email = req.body.email;
    item.username = req.body.username;

    item.save()
    .then((item) => res.json({result: 'SUCCESS', item: item}))
    .catch(err => res.status(400).json('Error: ' + err))
  })
  .catch(err => res.status(400).json('Error: ' + err))

})

// delete single
app.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
  .then(()=>res.json({result: 'SUCCESS', message:'User deleted successfully'}))
  .catch(err => res.status(400).json('Error: ' + err));
});

// search filters
const searchFilter = (req) => {
  var query = {};

  // filter title
  if(req.query.filterName){
    query["name"] = new RegExp(req.query.filterName, 'i')
  }

  // filter address
  if(req.query.filterAddress){
    query["address"] = new RegExp(req.query.filterAddress, 'i')
  }

  // filter email
  if(req.query.filterEmail){
    query["email"] = new RegExp(req.query.filterEmail, 'i')
  }

  // filter username
  if(req.query.filterUsername){
    query["username"] = new RegExp(req.query.filterUsername, 'i')
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
