const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);

const Currency = mongoose.Types.Currency;

const paymentSchema = mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  amount : {
    type: Currency,
    required: true
  },
  details : {
    type: String,
    required: true
  },
  received : {
      type: Boolean,
      default: false
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

module.exports = mongoose.model('payments', paymentSchema);