const express = require('express');
const router = express.Router();
const isAuth = require('../config/auth');

const customerController = require('../controllers/customer/customerController')

/*
  REGISTER SETUP
*/

router.route('/register')
  .get(customerController.getAllCustomers)
  .post(customerController.createNewCustomer)

/*
  LOGIN SETUP
*/

router.route('/login')
  .get(customerController.getLogin)
  .post(customerController.loginCustomer)

/*
  DASHBOARD SETUP
*/

router.route('/dashboard')
  .get(isAuth, customerController.getDashboard)
  .post()

/*
  LOGIN SETUP
*/

router.route('/logout')
  .get(customerController.logout)

module.exports = router;
