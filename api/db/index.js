const mongoose = require('mongoose');

// const uri = "mongodb+srv://dbroot:dbroot@cluster0-gaotq.mongodb.net";
// mongoose.connect(uri, { dbName:'blog' })
// .then(()=>{
//   console.log('db "blog" connected');
// })


mongoose.connect('mongodb://localhost:27017/blog');
mongoose.connection.on("connected", () => {
    console.log("Connected 11 11 to database");
});
mongoose.connection.on("error", (err) => {
  console.log("Database error:" + err);
});


/* var mysql = require('mysql');

var con = mysql.createConnection({
    socketPath : '/Applications/MAMP/tmp/mysql/mysql.sock', //path to mysql sock in MAMP
    host: "localhost",
  user: "root",
  password: "root",
  database: "medikoma",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
}); */