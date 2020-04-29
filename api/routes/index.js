// https://www.terlici.com/2014/08/25/best-practices-express-structure.html

const express = require('express');
const app = express();

// auth
// const {authenticateJWT} = require('../shared/auth');

// root
app.get('/', (req, res) => {
    res.json({item: 'Welcome ini separated page...'});
});


// site routes through controller
app.use('/site', require('../controllers/site'));


// user routes through controller
app.use('/user', require('../controllers/user'));


// post routes through controller
app.use('/post', require('../controllers/post'));


// comment routes through controller
app.use('/comment', require('../controllers/comment'));


// site routes through controller
app.use('/site', require('../controllers/site'));


module.exports = app;
