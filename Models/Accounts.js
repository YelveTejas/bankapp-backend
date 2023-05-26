// models/Account.js

const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, default: 0 },
  transactionType: { type: String, enum: ['deposit', 'withdraw'], required: true },
  timestamp: { type: Date, default: Date.now },
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
