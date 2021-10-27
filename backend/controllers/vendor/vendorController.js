const bcrypt = require('bcryptjs');

const Vendor = require('../../models/vendor');
const Book = require('../../models/booking');
const Pay = require('../../models/payment');

/*
  REGISTER SETUP
*/

exports.getAllVendors = async (req, res, next) => {
  try {
    let vendors = await Vendor.find()
    return res.json(vendors)
  } catch (error) {
    console.error(error);
    next(error);
  }
}
exports.createNewVendor= async (req, res, next) => {
  try {
    let { name,company, location, email, phone_number, password } = req.body;

    await Vendor.findOne({ 'name': req.body.name, 'email': req.body.email })
      .then((vendor) => {
        if (vendor) return res.json({ message: 'Vendor already exists' })
      })
      .catch((error) => console.error(error))

    let newVendor = new Vendor(req.body)
    newVendor.save()
      .then((result) => res.status(201).json({result}))
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
exports.loginVendor = async (req, res, next) => {
  try {
    let { email, password } = req.body
    let vendor = await Vendor.findOne({ email })
    if(!vendor) return res.json({ message: 'Kindly register first' })

    let matchPassword = await bcrypt.compare(password, vendor.password)
    if(!matchPassword) return res.json({ message: 'Wrong Password' })

    return res.json({
      result:vendor
    })

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
  GET/CONFIRM/DELETE BOOKING REQUEST BY ID SETUP
*/

exports.getBooking = async (req, res, next) => {
  try {
    await Book.find({ 'vendor': req.params.id })
      .populate('customer', ['name','email'])
      .then((booked) => {
        if(req.params.id === String(booked[0].vendor._id)) return res.status(200).json(booked)
        return res.json({ message: 'This Vendor has not been booked' })
      })
      .catch((error) => console.error(error))  
    } catch (error) {
    console.error(error);
    next(error);
  }
}


exports.confirmBooking = async (req, res, next) => {
  try {
    await Book.updateOne({ vendor: req.params.id , status: false},{ $set: { status: true } }, { new: true }).then(result => res.json(result)).catch(err => res.json(err))
  } catch (error) {
    console.error(error);
    next(error);
  }
}

exports.deleteBooking = async (req, res, next) => {
  try {
    await Book.deleteOne({ vendor: req.params.id }, { new: true })
      .then(result => res.json({ message: 'Booking deleted',result
      }))
      .catch(err => res.json(err))
  } catch (error) {
    console.error(error);
    next(error);
  }
}

/*
  GET/CONFIRM PAYMENT REQUEST BY ID SETUP
*/

exports.getPayment = async (req, res, next) => {
  try {
    await Pay.find({ 'vendor': req.params.id })
      .populate('customer', ['name','email'])
      .then((payed) => {
        if(req.params.id === String(payed[0].vendor._id)) return res.status(200).json(payed)
        return res.json({ message: 'THIS PAYMENT DOES NOT BELONG TO THE SPECIFIED VENDOR' })
      })
    } catch (error) {
    console.error(error);
    next(error);
  }
}


exports.confirmPayment = async (req, res, next) => {
  try {
    await Pay.updateOne({ vendor: req.params.id , received: false},{ $set: { received: true } }, { new: true }).then(result => res.json(result)).catch(err => res.json(err))
  } catch (error) {
    console.error(error);
    next(error);
  }
}

/*
  GET ONE VENDOR SETUP
*/

exports.getOneVendor = async (req, res, next) => {
  try {
    let vendor = await Vendor.findById({ _id: req.params.id})
    return res.json(vendor)
  } catch (error) {
    console.error(error);
    next(error);
  }
}