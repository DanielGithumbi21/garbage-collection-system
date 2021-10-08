const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const cors = require("cors")

const indexRouter = require('./routes/customer');
const usersRouter = require('./routes/vendor');

const app = express();

const db = require('./config/db').MongoURI;
const { MongoURI } = require('./config/db');


mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true }).then(console.log('Connected to MongoDB Atlas')).catch(err => console.log(err))

// const store = new MongoDBStore({
//   uri: MongoURI,
//   collection: 'mySessions'
// })

// app.use(session({
//   secret: 'this is the key that will be signed by the cookie',
//   resave: false,
//   saveUninitialized: false,
//   cookie: { maxAge: 24 * 60 * 60 * 1000},
//   store: store
// }))
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/customer', indexRouter);
app.use('/vendor', usersRouter);


module.exports = app;
