const express = require('express');
const app = express();
const routes = express.Router();

// db connection
const db = require('../db');

// model
let User = require('../models/user');

// validation rule
const { validationRules, validate, getFilters } = require('../validation/login.js')

// jwt
const jwt = require('jsonwebtoken');

// token
const {accessTokenSecret} = require('../shared/constant');

// login
app.post('/login', validationRules(), validate, function(req, res){
    // Read username and password from request body
    const { username, password } = req.body;

    // filter by username and password
    User.find({"username": username, "password": password})
    .then(user => {
      
      // response
      loginResponse(user, res)
      
    })
    .catch(err => res.status(400).json('Error: ' + err))

})


// search filters
const loginResponse = (user, res) => {

  if (user.length > 0) {

    // Generate an access token
    jwt.sign({user}, accessTokenSecret, (err, token) => {
        if(err) { console.log(err) }    
        res.json({result: 'SUCCESS', user: user, token: token})
    });

  } else {  
    res.json({result: 'ERROR', message: 'Username or password incorrect'});
  }

}

module.exports = app;
