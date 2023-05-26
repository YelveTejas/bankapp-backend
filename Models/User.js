// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:{type:String},
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['customer', 'banker'], default: 'customer' },
  token:{type:String},
  balance: { type: Number, default: 0 },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
