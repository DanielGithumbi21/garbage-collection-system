const bcrypt = require('bcryptjs');
const { ObjectId } = require('bson');
const Customer = require('../../models/customer')

/*
  REGISTER SETUP
*/

exports.getAllCustomers = async (req, res, next) => {
  try {
    let customers = await Customer.find()
    res.json(customers)
    return res.status(200).json({ message: 'GET ALL CUSTOMERS' })
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