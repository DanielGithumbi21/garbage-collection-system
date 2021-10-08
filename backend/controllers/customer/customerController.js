const bcrypt = require('bcryptjs');
const Customer = require('../../models/customer')
const Book = require('../../models/booking');

/*
  REGISTER SETUP
*/

exports.getAllCustomers = async (req, res, next) => {
  try {
    let customers = await Customer.find()
    return res.json(customers)
  } catch (error) {
    console.error(error);
    next(error);
  }
}
exports.createNewCustomer= async (req, res, next) => {
  try {
    let { first_name, last_name, address, email, phone_number, password } = req.body
    let customer = await Customer.findOne({ first_name, last_name, email })
    if (customer) return res.json({ message: 'Customer already exists' })
    let newCustomer = new Customer({
      first_name, 
      last_name, 
      address, 
      email, 
      phone_number, 
      password
    })
    newCustomer.save()
      .then((result) => res.status(201).json(result))
      .catch(err => console.error(err))
  } catch (error) {
    console.error(error);
    next(error);
  }
}

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
exports.loginCustomer = async (req, res, next) => {
  try {
    let { email, password } = req.body
    let customer = await Customer.findOne({ email })
    if(!customer) return res.json({ message: 'Kindly register first' })

    let matchPassword = bcrypt.compare(password, customer.password)
    if(!matchPassword) return res.json({ message: 'Wrong Password' })

    req.session.isAuth = true
    return res.json({ message: 'LOGIN SUCCESSFULL' })
  } catch (error) {
    console.error(error);
    next(error);
  }
}

/*
  DASHBOARD SETUP
*/

exports.getDashboard = async (req, res, next) => {
  try {
    return res.json({ message: 'GET DASHBOARD PAGE' })
  } catch (error) {
    console.error(error);
    next(error);
  }
}

/*
  LOGOUT SETUP
*/

exports.logout = async (req, res, next) => {
  try {
    req.session.destroy()
    return res.json({ message: 'COOKIE DESTROYED REDIRECTING TO LOGIN PAGE OR REGISTER PAGE OR LANDING PAGE' })
  } catch (error) {
    console.error(error);
    next(error);
  }
}

/*
  MAKE BOOKING SETUP
*/

exports.getBooking = async (req, res, next) => {
  try {
    let booking = await Book.find().populate('customer', ['first_name','last_name', 'email'])
    return res.json(booking)
    } catch (error) {
    console.error(error);
    next(error);
  }
}

exports.makeBooking = async (req, res, next) => {
  try {
    let { date, status, details, customer } = req.body;
    let booking = new Book({
      date, status, details, customer
    })
    booking.save()
      .then((result) => res.status(201).json(result))
      .catch(error => console.error(error));
  } catch (error) {
    
  }
}

exports.getOneCustomer = async (req, res, next) => {
  try {
    let customer = await Customer.findById({ _id: req.params.id})
    return res.json(customer)
  } catch (error) {
    console.error(error);
    next(error);
  }
}