
const jwt = require("jsonwebtoken");
const User = require('../../Models/User')
const dotenv = require('dotenv')
dotenv.config()
const account = async(req,res)=>{
   let  token = req.headers.authorization

   let decode = jwt.decode(token,process.env.jwtkey)
   
   try{
    let user = await User.findOne(
        {_id:decode._id}   
    ) 
    return res.status(200).send({account:user})
   }catch(err){
    console.log(err)
    return res.status(400).send({ message: "Something went wrong" });
   }
   
}

module.exports={
    account
}