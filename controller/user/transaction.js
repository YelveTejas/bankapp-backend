const jwt = require("jsonwebtoken");
const User = require('../../Models/User');
const Account = require("../../Models/Accounts");
const dotenv = require('dotenv')
dotenv.config()


const transactions= async(req,res)=>{
    let token = req.headers.authorization
    let decode = jwt.decode(token,process.env.jwtkey)
    try{
  let allTransactions = await Account.find({userId:decode._id})
  return res.status(200).send({transactions:allTransactions})
    }catch(err){
        return res.send({message:'Something went wrong'})
    }
}


module.exports=transactions