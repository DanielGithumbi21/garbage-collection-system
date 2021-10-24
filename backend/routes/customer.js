const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customer/customerController');

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
  .get(customerController.getDashboard)
  .post()

/*
  LOGOUT SETUP
*/

router.route('/logout')
  .get(customerController.logout)

/*
  GET/MAKE BOOKING BY ID SETUP
*/

router.route('/book/:id')
  .get(customerController.getBooking)
  .post(customerController.makeBooking)

/*
  MAKE PAYMENT BY ID SETUP
*/

router.route('/pay/:id')
  .get(customerController.getPayment)
  .post(customerController.makePayment)

/*
  GET CUSTOMER BY ID SETUP
*/

router.route('/:id')
  .get(customerController.getOneCustomer)

module.exports = router;
