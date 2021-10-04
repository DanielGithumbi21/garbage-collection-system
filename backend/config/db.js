const mysql = require('mysql2');
require('dotenv').config()

//CREATING CONNECTION
var db = mysql.createPool({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
});

console.log('Connected to MySQL');
module.exports = db.promise();