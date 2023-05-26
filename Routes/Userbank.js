const express = require('express')
const { account } = require('../controller/user/accounts')
const deposits = require('../controller/user/deposit')
const transactions = require('../controller/user/transaction')
const Userbank = express.Router()
const app = express()
const {authenticate} = require('../Middleware/Authenticate')
app.use(authenticate)
Userbank.get('/account',account)
Userbank.post('/deposit',deposits)
Userbank.get('/trasaction',transactions)

module.exports={
    Userbank
}