const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin/adminController');

/*
  REGISTER SETUP
*/

router.route('/register')
  .get(adminController.getAllAdmins)
  .post(adminController.createNewAdmin)

/*
  LOGIN SETUP
*/

router.route('/login')
  .get(adminController.getLogin)
  .post(adminController.loginAdmin)



/*
  HANDLE CUSTOMER SETUP
*/

router.route('/customers')
  .get(adminController.getAllCustomers)

/*
  HANDLE CUSTOMER BY ID SETUP
*/

router.route('/customers/:id')
  .get(adminController.getCustomer)
  .patch(adminController.patchCustomer)
  .delete(adminController.deleteCustomer)

/*
  HANDLE VENDOR SETUP
*/

router.route('/vendors')
  .get(adminController.getAllVendors)

/*
  HANDLE VENDOR BY ID SETUP
*/

router.route('/vendors/:id')
  .get(adminController.getVendor)
  .patch(adminController.patchVendor)
  .delete(adminController.deleteVendor)

/*
  HANDLE BOOK SETUP
*/

router.route('/bookings')
  .get(adminController.getAllBookings)

/*
  HANDLE BOOK BY ID SETUP
*/

router.route('/bookings/:id')
  .get(adminController.getBooking)
  .patch(adminController.patchBooking)
  .delete(adminController.deleteBooking)

module.exports = router;
