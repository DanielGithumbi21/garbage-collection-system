const express = require('express');
const router = express.Router();
const postController = require('../controllers/customer/postController')
const isAuth = require('../config/auth')

//CUSTOMER

// REGISTER OR SIGN UP
router.route('/register')
  .get(postController.getAllCustomers)
  .post(postController.createNewCustomer)

// LOGIN or SIGN IN
router.route('/login')
  .get(postController.getLogin)
  .post(postController.loginCustomer)

//CUSTOMER DASHBOARD
router.route('/dashboard')
  .get(isAuth, postController.getDashboard)

//LOGOUT
router.route('/logout')
  .post(postController.logout)


module.exports = router;
