const jwt = require('jsonwebtoken')
const User = require('../Models/User')
const dotenv = require('dotenv')
dotenv.config()
const authenticate=async(req,res,next)=>{
    const token = req.headers.authorization
    const decode = jwt.verify(token,process.env.jwtkey)
    console.log(decode)
    let user = await User.findOne({_id:decode._id})
    console.log('user',user)
    try{
        if(decode){
            next()
           }
           else
           {
            res.send({"message":"You are not Authorized"})
           }
    }catch(err){
        console.log(err)
        res.send({message:"You are not Authorized"})
    }
   
}

module.exports={
    authenticate
}