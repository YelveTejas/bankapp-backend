const express = require('express')
const {connection} =require('./Database/db')

const {Bankroute} = require('./Routes/Bank.Routes')
const {Userbank} = require('./Routes/Userbank')
const {signup} = require('./controller/Authentication/Signup')
const {login} = require('./controller/Authentication/Login')
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/signup',signup)
app.use('/login',login)


app.use('/user',Userbank)
app.use('/bank',Bankroute)

app.listen(process.env.port,async()=>{
    try{
   await connection
   console.log('Connected to Mongo')
    }catch(err){
    console.log(err)
    }
   console.log('Running 4500')
})

