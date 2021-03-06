const bcrypt = require('bcryptjs');

const mongoose = require('mongoose');
const customerSchema = mongoose.Schema({
  name : {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 64
  },
  address : {
    type: String,
    required: true,
    maxLength: 128
  },
  email : {
    type: String,
    required: true,
    unique: true,
    maxLength: 128
  },
  phone_number : {
    type: String,
    required: true,
  },
  password : {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

customerSchema.pre('save', async function(next) {
  if(!this.isModified('password')) next()
  this.password = await bcrypt.hash(this.password,12)
  next();
});

module.exports = mongoose.model('customer', customerSchema)