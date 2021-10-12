const bcrypt = require('bcryptjs');

const Customer = require('../../models/customer');
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
    let { name, address, email, phone_number, password } = req.body
    let customer = await Customer.findOne({ name, email })
    if (customer) return res.json({ message: 'Customer already exists' })
    let newCustomer = new Customer(req.body)
    newCustomer.save()
      .then((result) => res.status(201).json(result))
      .catch(err => console.error(err))
  //  const result = await Customer.create({first_name,last_name,address,email,phone_number,password})
  // const token = jwt.sign({email:result.email,id:result._id},secret,{expiresIn:"1h"})
  // res.status (200).json({result,token})
} catch (error) {
  console.log(error)
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

    // const token = jwt.sign({email:customer.email,id:customer._id},secret,{expiresIn:"1h"})
    // res.json.status(200).json({result:customer,token})
    res.status(200).json("login successful")
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