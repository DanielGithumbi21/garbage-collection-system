const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
require('dotenv').config()

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(session({
  secret: 'this is the key that will be signed by the cookie',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 24 * 60 * 60 * 1000},
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/customer', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
