const express = require('express');
const router = express.Router();
const isAuth = require('../config/auth');

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
  .get(isAuth, vendorController.getDashboard)
  .post()

/*
  LOGOUT SETUP
*/

router.route('/logout')
  .get(vendorController.logout)

module.exports = router;
