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
  GET VENDOR BY ID SETUP
*/

router.route('/:id')
  .get(vendorController.getOneVendor)

module.exports = router;
