const mongoose = require('mongoose');
const bookingSchema = mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: false
  },
  details: {
    type: String,
    required: true
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'customer'
  },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'vendor'
  }
})

module.exports = mongoose.model('booking', bookingSchema);