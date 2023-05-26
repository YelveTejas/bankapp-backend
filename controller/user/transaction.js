const jwt = require("jsonwebtoken");
const User = require('../../Models/User');
const Account = require("../../Models/Accounts");



const transactions= async(req,res)=>{
    let token = req.header.authorization
    let decode = jwt.verify(token,'masai')
    try{
  let trans = await Account.find({_userId:decode._id})
  return res.status(200).send({transactions:trasact})
    }catch(err){
        return res.send({message:'Something went wrong'})
    }

}


module.exports=transactions