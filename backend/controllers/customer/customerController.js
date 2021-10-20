const bcrypt = require('bcryptjs');

const Customer = require('../../models/customer');
const Book = require('../../models/booking');
const Pay = require('../../models/payment')


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
    let { name, address, email, phone_number, password } = req.body
    let customer = await Customer.findOne({ name, email })
    if (customer) return res.json({ message: 'Customer already exists' })
    let newCustomer = new Customer(req.body)
    newCustomer.save()
      .then((result) => res.status(201).json(result))
      .catch(err => console.error(err))
  } catch (error) {
    console.log(error);
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

    let matchPassword = await bcrypt.compare(password, customer.password)
    if(!matchPassword) return res.json({ message: 'Wrong Password' })
    
    res.status(200).json(customer)
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
    let booking = await Book.find().populate('vendor', ['name','email'])
    if(req.params.id === String(booking[0].customer._id)) return res.json(booking)
    return res.json({ message: 'THIS BOOKING DOES NOT BELONG TO THE SPECIFIED CUSTOMER' })
    } catch (error) {
    console.error(error);
    next(error);
  }
}

exports.makeBooking = async (req, res, next) => {
  try {
    let { date, status, details, customer, vendor } = req.body;
    if(req.params.id != String(req.body.customer)) return res.json({ message: 'THIS BOOKING DOES NOT BELONG TO THE SPECIFIED CUSTOMER' })
    let booking = new Book(req.body)
    booking.save()
      .then((result) => res.status(201).json(result))
      .catch(error => console.error(error));
  } catch (error) {
    console.error(error);
    next(error);
  }
}

/*
  MAKE PAYMENT BY ID SETUP
*/

exports.getPayment = async (req, res, next) => {
  try {
    let payment = await Pay.find().populate('vendor', ['name','email'])
    if(req.params.id === String(payment[0].customer._id)) return res.json(payment)
    return res.json({ message: 'THIS PAYMENT DOES NOT BELONG TO THE SPECIFIED CUSTOMER' })
    } catch (error) {
    console.error(error);
    next(error);
  }
}

exports.makePayment = async (req, res, next) => {
  try {
    let { type, amount, details, customer, vendor } = req.body;
    if(req.params.id != String(req.body.customer)) return res.json({ message: 'THIS PAYMENT DOES NOT BELONG TO THE SPECIFIED CUSTOMER' })
    let payment = new Pay(req.body)
    payment.save()
      .then((result) => res.status(201).json(result))
      .catch(error => console.error(error));
  } catch (error) {
    console.error(error);
    next(error);
  }
}

/*
  GET ONE CUSTOMER SETUP
*/

exports.getOneCustomer = async (req, res, next) => {
  try {
    let customer = await Customer.findById({ _id: req.params.id})
    return res.json(customer)
  } catch (error) {
    console.error(error);
    next(error);
  }
}