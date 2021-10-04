const Post = require('../../models/customer/Post')
// const bcrypt = require('bcryptjs')

/* 
  REGISTER SETUP
*/

exports.getAllCustomers = async (req, res, next) => {
  try {
    let [customer, _] = await Post.find()
    return res.status(200).json({customer})
  } catch (error) {
    console.error(error)
    next(error)
  }
return res.send('Get All Customers Route')
}

exports.createNewCustomer = async (req, res, next) => {
  try {
  let { first_name, last_name, email, phone_number, address, password } = req.body

  let [customer, ] = await Post.findOneCustomer(email)
  if (Number(customer.length) > 0) return res.json({
    message: 'Email Already exists'
  })

  let newCustomer = await new Post(first_name, last_name, email, phone_number, address, password) 
  newCustomer.save()
  res.send('Customer saved')
  } catch (error) {
    console.error(error)
    next(error)
  }
}

/* 
  LOGIN SETUP
*/
exports.getLogin = async (req, res, next) => {
  return res.json({message: 'This is the login page'})
}


exports.loginCustomer = async(req, res, next) => {
  try {
    let { email, password } = req.body
    let [customer, ] = await Post.findCustomerPassword(email, password)
    // redirect back to register page
    if(!customer) return res.json({message: 'Kindly register first' })

    // // redirect to customer dashboard
    req.session.isAuth = true
    
    return res.json({message: 'Login successful'})
  } catch (error) {
    console.error(error)
    next(error)
  }
}

/* 
  CUSTOMER DASHBOARD SETUP
*/
exports.getDashboard = async (req, res, next) => {
  try {
  return res.json({message: 'This is the customer dashboard page'})
  } catch (error) {
    console.error(error)
    next(error)
  }
}

/* 
  CUSTOMER LOGOUT SETUP
*/
exports.logout = async(req, res, next) => {
  try {
    req.session.destroy()

    // redirect to landing page or home page
    return res.json({ message: 'Cookie destroyed' })
  } catch (error) {
    console.error(error)
    next(error)
  }
}

