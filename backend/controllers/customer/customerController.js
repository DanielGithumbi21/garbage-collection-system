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

    await Customer.findOne({ 'name': req.body.name, 'email': req.body.email })
      .then((customer) => {
        if(customer) return res.json({ message: 'Customer already exists' })
      } )
      .catch(error => console.error(error))

    let newCustomer = new Customer(req.body)
    newCustomer.save()
      .then((result) => res.status(201).json({
        result
      }))
      .catch(err => console.error(err))

  } catch (error) {
    console.log(error);
    next(error);
  }
}

/*
  LOGIN SETUP
*/

exports.loginCustomer = async (req, res, next) => {
  try {
    let { email, password } = req.body
    
    let customer = await Customer.findOne({ email })
    if(!customer) return res.json({ message: 'Kindly register first' })

    let matchPassword = await bcrypt.compare(password, customer.password)
    if(!matchPassword) return res.json({ message: 'Wrong Password' })
    
    res.status(200).json({
      result:customer
    })
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
    await Book.find({'customer': req.params.id})
      .populate('vendor', ['name','email'])
      .then((booking) => {
        if(req.params.id === String(booking[0].customer._id)) return res.json(booking)
          return res.json({ message: 'This Customer has not made any booking' })
      })
      .catch((error) => console.error(error))
    } catch (error) {
    console.error(error);
    next(error);
  }
}

exports.makeBooking = async (req, res, next) => {
  try {
    let { date, status, details, customer, vendor } = req.body;

    if(req.params.id != String(req.body.customer)) return res.json({ message: 'This Customer is not related to the booking being made' })

    let newBooking = new Book(req.body)
    newBooking.save()
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
    await Pay.find({'customer': req.params.id})
      .populate('vendor', ['name','email'])
      .then((payment) => {
        if(req.params.id === String(payment[0].customer._id)) return res.json(payment)
        return res.json({ message: 'This Customer has not made any payment' })
      })
      .catch((error) => console.error(error))
    } catch (error) {
    console.error(error);
    next(error);
  }
}

exports.makePayment = async (req, res, next) => {
  try {
    let { type, amount, details, customer, vendor } = req.body;

    if(req.params.id != String(req.body.customer)) return res.json({ message: 'This Customer is not related to the payment being made' })

    let newPayment = new Pay(req.body)
    newPayment.save()
      .then((result) => res.status(201).json(result))
      .catch(error => console.error(error));

    
  } catch (error) {
    console.error(error);
    next(error);
  }
}
exports.confirmPayment = async (req, res, next) => {
  try {
    await Book.updateOne({ _id: req.params.id , payed: false},{ $set: { payed: true } }, { new: true }).then(result => res.json(result)).catch(err => res.json(err))
  } catch (error) {
    console.error(error);
    next(error);
  }
}
