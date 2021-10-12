const bcrypt = require('bcryptjs');

const mongoose = require('mongoose');
const vendorSchema = mongoose.Schema({
  name : {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 64
  },
  company : {
    type: String,
    required: true,
    maxLength: 64
  },
  location : {
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
    type: Number,
    required: true,
  },
  password : {
    type: String,
    required: true,
  },
})

vendorSchema.pre('save', async function(next) {
  if(!this.isModified('password')) next()
  this.password = await bcrypt.hash(this.password,12)
  next();
});

module.exports = mongoose.model('vendor', vendorSchema)