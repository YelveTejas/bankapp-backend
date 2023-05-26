const jwt = require("jsonwebtoken");
const User = require('../../Models/User');
const Account = require("../../Models/Accounts");
const dotenv = require('dotenv')
dotenv.config()

const deposits = async(req,res)=>{
let token = req.header.authorization
const {amount,type} = req.body
let decode = jwt.verify(token,process.env.jwtkey)


amount = Number(amount)
if(type!=='deposit'){
    return res.status({message:"Wrong Api"})
}

try{
let user = await User.findOne({_id:decode._id})
let bal = user.balance+amount
let deposit = await Account.create({
    userId:user._id,
    type,
    balance:bal,
    amount,

})
let update = await User.updateOne({_id:user._id},{balance:bal})
res.send({message:'Cash Deposited Successfully'})

}catch(err){
 console.log(err)
 res.send({message:'Something Went Wrong'})
}
}


module.exports=deposits