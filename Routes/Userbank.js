const express = require('express')
const { account } = require('../controller/user/accounts')
const deposits = require('../controller/user/deposit')
const transactions = require('../controller/user/transaction')
const withdraw = require('../controller/user/withdraw')
const Userbank = express.Router()
// const app = express.Router()
const {authenticate} = require('../Middleware/Authenticate')
Userbank.use(authenticate)
Userbank.get('/account',account)
Userbank.post('/deposit',deposits)
Userbank.get('/transaction',transactions)
Userbank.post('/withdraw',withdraw)

module.exports={
    Userbank
}