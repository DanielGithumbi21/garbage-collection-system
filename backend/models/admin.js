const bcrypt = require('bcryptjs');

const mongoose = require('mongoose');
const adminSchema = mongoose.Schema({
  email : {
    type: String,
    required: true,
    unique: true,
    maxLength: 128
  },
  password : {
    type: String,
    required: true,
  }
})

adminSchema.pre('save', async function(next) {
  if(!this.isModified('password')) next()
  this.password = await bcrypt.hash(this.password,12)
  next();
});

module.exports = mongoose.model('admin', adminSchema)