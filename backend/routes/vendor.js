const express = require('express');
const router = express.Router();


const vendorController = require('../controllers/vendor/vendorController')

/*
  REGISTER SETUP
*/

router.route('/register')
  .get(vendorController.getAllVendors)
  .post(vendorController.createNewVendor)

/*
  LOGIN SETUP
*/

router.route('/login')
  .get(vendorController.getLogin)
  .post(vendorController.loginVendor)

/*
  DASHBOARD SETUP
*/

router.route('/dashboard')
  .get(vendorController.getDashboard)
  .post()

/*
  LOGOUT SETUP
*/

router.route('/logout')
  .get(vendorController.logout)

/*
  GET/CONFIRM BOOKING REQUEST BY ID SETUP
*/

router.route('/book/:id')
  .get(vendorController.getBooking)
  .patch(vendorController.confirmBooking)
  .delete(vendorController.deleteBooking)

/*
  GET/CONFIRM PAYMENT REQUEST BY ID SETUP
*/

router.route('/pay/:id')
  .get(vendorController.getPayment)
  .patch(vendorController.confirmPayment)

/*
  GET VENDOR BY ID SETUP
*/

router.route('/:id')
  .get(vendorController.getOneVendor)

module.exports = router;
