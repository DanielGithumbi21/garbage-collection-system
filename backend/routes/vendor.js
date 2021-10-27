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
  .post(vendorController.loginVendor)

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

module.exports = router;
