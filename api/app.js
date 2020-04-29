const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3700;
const cors = require('cors');
// const expressValidator=require("express-validator")

// app.use(expressValidator())

/* routes */
const routes = require('./routes');

app.use(cors());
//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//  Connect all our routes to our application
app.use('/', routes);

// Turn on that server
app.listen(process.env.port || PORT, function(){
    console.log('server running on: ', PORT);
})


