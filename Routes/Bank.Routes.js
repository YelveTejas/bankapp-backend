const express = require('express')
const Bankroute = express.Router()



Bankroute.get('/get',async(req,res)=>{
    res.send('Hello Bachi')
})


module.exports={
    Bankroute
}