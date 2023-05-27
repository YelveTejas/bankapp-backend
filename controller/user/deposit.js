const jwt = require("jsonwebtoken");
const User = require('../../Models/User');
const Account = require("../../Models/Accounts");
const dotenv = require('dotenv')
dotenv.config()

const deposits = async(req,res)=>{
let token = req.headers.authorization
let {amount,type} = req.body

let decode = jwt.decode(token,process.env.jwtkey)
   

 amount = Number(amount)
if(type!=='deposit'){
    return res.status({message:"Wrong Api"})
}

try{
let user = await User.findOne({_id:decode._id})
let bal = user.balance+amount
let deposit = await Account.create({
    userId:user._id,
    transactionType:type,
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