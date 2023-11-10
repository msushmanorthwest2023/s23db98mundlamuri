var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

<<<<<<< HEAD
require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;    
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shoesRouter = require('./routes/shoes');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var shoes = require("./models/shoes");
var resourceRouter = require('./routes/resource');


var app = express();

async function recreateDB(){
  // Delete everything
  await shoes.deleteMany();
  let instance1 = new
  shoes({shoe_brand:"Puma",shoe_size:"7",shoe_price:200});
  let instance2 = new
  shoes({shoe_brand:"Adidas",shoe_size:"9",shoe_price:500});
  let instance3 = new
  shoes({shoe_brand:"Nyka",shoe_size:"8",shoe_price:400});
  instance1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)
  });
  instance2.save().then(doc=>{
  console.log("Second object saved")}
  ).catch(err=>{
  console.error(err)
  });
  instance3.save().then(doc=>{
  console.log("Third object saved")}
  ).catch(err=>{
  console.error(err)
  });
  }
  let reseed = true;
  if (reseed) { recreateDB();}

=======
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

>>>>>>> 42f1c615d4c9e5cd94cef46d77927312780c5aa7
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
<<<<<<< HEAD
app.use('/shoes', shoesRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);

=======
>>>>>>> 42f1c615d4c9e5cd94cef46d77927312780c5aa7

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
