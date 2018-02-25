const express = require('express');

const path = require('path');

const logger = require('morgan');

const cors = require('cors');

const cookieParser = require('cookie-parser');

const app = express();

const bodyParser = require('body-parser');

require('./config/mongoose');

const routes = require('./config/routes');

const session = require('express-session');

const sessionConfig = {
  secret: 'themostsecuresecretkeyever', // Secret name for decoding secret and such
  resave: false, // Don't resave session if no changes were made
  saveUninitialized: true, // Don't save session if there was nothing initialized
  name: 'foodSnapper', // Sets a custom cookie name
  cookie: {
    secure: false, // This need to be true, but only on HTTPS
    httpOnly: false, // Forces cookies to only be used over http
    maxAge: 3600000,
  },
};
app.use(session(sessionConfig));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', routes);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
