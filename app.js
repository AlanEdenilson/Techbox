var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
const session = require('express-session');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tallerRouter = require('./routes/taller');
var tallersone = require('./routes/tallerone');
var tallertwo = require('./routes/tallertwo');


var app = express();

app.use(session({
  secret: 'mysecret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }


}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extends: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/taller',tallerRouter);
app.use('/One_T', tallersone);
app.use('/Two_T',tallertwo);


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
