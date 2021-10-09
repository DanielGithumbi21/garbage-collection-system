const bcrypt = require('bcryptjs');
const Vendor = require('../../models/vendor')

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
    let { first_name, last_name, location, email, phone_number, password } = req.body
    let vendor = await Vendor.findOne({ first_name, last_name, email })
    if (vendor) return res.json({ message: 'Vendor already exists' })
    let newVendor = new Vendor({
      first_name, 
      last_name, 
      location, 
      email, 
      phone_number, 
      password
    })
    newVendor.save()
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
exports.loginVendor = async (req, res, next) => {
  try {
    let { email, password } = req.body
    let vendor = await Vendor.findOne({ email })
    if(!vendor) return res.json({ message: 'Kindly register first' })

    let matchPassword = bcrypt.compare(password, vendor.password)
    if(!matchPassword) return res.json({ message: 'Wrong Password' })

    // req.session.isAuth = true
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