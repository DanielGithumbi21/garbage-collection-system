const mongoose = require('mongoose');
const bookingSchema = mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: false
  },
  details: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
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