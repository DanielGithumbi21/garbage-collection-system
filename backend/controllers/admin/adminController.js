const bcrypt = require('bcryptjs');

const Customer = require('../../models/customer');
const Vendor = require('../../models/vendor');
const Book = require('../../models/booking');
const Pay = require('../../models/payment');
const Admin = require('../../models/admin');

/*
  LOGIN SETUP
*/

exports.getLogin = async (req, res, next) => {
  try {
    return res.json({ message: 'GET LOGIN PAGE' })
  } catch (error) {
    console.error(error);
    next(error);
  }
}
exports.loginAdmin = async (req, res, next) => {
  try {
    let { email, password } = req.body
    let admin = await Admin.findOne({ email })
    if(!admin) return res.json({ message: 'Kindly register first' })

    let matchPassword = await bcrypt.compare(password, admin.password)
    if(!matchPassword) return res.json({ message: 'Wrong Password' })

    res.status(200).json(admin)
  } catch (error) {
    console.error(error);
    next(error);
  }
}

/*
  CUSTOMERS SETUP
*/

exports.getAllCustomers = async (req, res, next) => {
  try {
    await Customer.find()
      .then((result) => res.status(200).json({
        count: result.length,
        body: result
      }))
      .catch(error => console.error(error))
  } catch (error) {
    console.error(error);
    next(error);
  }
}

/*
  CUSTOMER BY ID SETUP
*/

exports.getCustomer = async (req, res, next) => {
  try {
    await Customer.findOne({ _id: req.params.id })
      .then((result) => {
        if(!result) return res.json({ message: 'Customer does not exits' })
        res.status(200).json(result)
      })
      .catch(error => console.error(error))
  } catch (error) {
    console.error(error);
    next(error);
  }
}

exports.patchCustomer = async (req, res, next) => {
  try {
    await Customer.updateOne({ _id: req.params.id },req.body, { new: true })
      .then(result => {
        if(!result) return res.json({ message: 'Customer does not exist' })
        return res.status(200).json(result)
      })
      .catch(err => res.json(err))
  } catch (error) {
    console.error(error);
    next(error);
  }
}

exports.deleteCustomer = async (req, res, next) => {
  try {
    await Customer.deleteOne({ _id: req.params.id }, { new: true })
      .then((result) => {
        if(!result) return res.json({ message: 'Customer does not exist' })
        return res.status(200).json({ message: 'Customer has been deleted' })
      })
  } catch (error) {
    console.error(error);
    next(error);
  }
}

/*
  VENDORS SETUP
*/

exports.getAllVendors = async (req, res, next) => {
  try {
    await Vendor.find()
      .then((result) => res.status(200).json({
        count: result.length,
        body: result
      }))
      .catch(error => console.error(error))
  } catch (error) {
    console.error(error);
    next(error);
  }
}

/*
  VENDOR BY ID SETUP
*/

exports.getVendor = async (req, res, next) => {
  try {
    await Vendor.findOne({ _id: req.params.id })
      .then((result) => {
        if(!result) return res.json({ message: 'Vendor does not exist' })
        res.status(200).json(result)
      })
      .catch(error => console.error(error))
  } catch (error) {
    console.error(error);
    next(error);
  }
}

exports.patchVendor = async (req, res, next) => {
  try {
    await Vendor.updateOne({ _id: req.params.id },req.body, { new: true })
      .then(result => {
        if(!result) return res.json({ message: 'Vendor does not exist' })
        return res.status(200).json(result)
      })
      .catch(err => res.json(err))
  } catch (error) {
    console.error(error);
    next(error);
  }
}

exports.deleteVendor = async (req, res, next) => {
  try {
    await Vendor.deleteOne({ _id: req.params.id }, { new: true })
      .then((result) => {
        if(!result) return res.json({ message: 'Vendor does not exist' })
        return res.status(200).json({ message: 'Vendor has been deleted' })
      })
  } catch (error) {
    console.error(error);
    next(error);
  }
}

/*
  BOOKINGS SETUP
*/

exports.getAllBookings = async (req, res, next) => {
  try {
    await Book.find()
      .then((result) => res.status(200).json({
        count: result.length,
        body: result
      }))
      .catch(error => console.error(error))
  } catch (error) {
    console.error(error);
    next(error);
  }
}

/*
  BOOKING BY ID SETUP
*/

exports.getBooking = async (req, res, next) => {
  try {
    await Book.findOne({ _id: req.params.id })
      .populate('customer', ['name','email'])
      .populate('vendor', ['name','email'])
      .then((result) => {
        if(!result) return res.json({ message: 'Booking does not exist' })
        res.status(200).json(result)
      })
      .catch(error => console.error(error))
  } catch (error) {
    console.error(error);
    next(error);
  }
}

exports.patchBooking = async (req, res, next) => {
  try {
    await Book.updateOne({ _id: req.params.id },req.body, { new: true })
      .then(result => {
        if(!result) return res.json({ message: 'Booking does not exist' })
        return res.status(200).json(result)
      })
      .catch(err => res.json(err))
  } catch (error) {
    console.error(error);
    next(error);
  }
}

exports.deleteBooking = async (req, res, next) => {
  try {
    await Book.deleteOne({ _id: req.params.id }, { new: true })
      .then((result) => {
        if(!result) return res.json({ message: 'Booking does not exist' })
        return res.status(200).json({ message: 'Booking has been deleted' })
      })
  } catch (error) {
    console.error(error);
    next(error);
  }
}

/*
  HANDLE BOOKED SETUP
*/

exports.getAllBooked = async (req, res, next) => {
  try {
    await Book.find({ status: true })
      .then((result) => res.status(200).json(result))
      .catch(err => console.error(err))
  } catch (error) {
    console.error(error);
    next(error);
  }
}

/*
  HANDLE SENT PAYMENT SETUP
*/

exports.madePayment = async (req, res, next) => {
  try {
    await Pay.find({ received: false })
      .then((result) => res.status(200).json({
        count: result.length,
        body: result
      }))
      .catch(err => console.error(err))
  } catch (error) {
    console.error(error);
    next(error);
  }
}

/*
  HANDLE RECIEVED PAYMENT SETUP
*/

exports.recievedPayment = async (req, res, next) => {
  try {
    await Pay.find({ received: true })
      .then((result) => res.status(200).json({
        count: result.length,
        body: result
      }))
      .catch(err => console.error(err))
  } catch (error) {
    console.error(error);
    next(error);
  }
}