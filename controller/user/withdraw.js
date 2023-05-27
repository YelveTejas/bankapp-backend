const jwt = require("jsonwebtoken");
const User = require('../../Models/User');
const Account = require("../../Models/Accounts");
const dotenv = require('dotenv')
dotenv.config()
const withdraw = async(req,res)=>{
    let token = req.headers.authorization;
    let {amount,type} = req.body
    let decode = jwt.decode(token,process.env.jwtkey)

    amount = Number(amount)
    if(type!='withdraw'){
        return res.status(400).send({message:'Incorrect Api'})
    }
    
    try{
  let user = await User.findOne({_id:decode._id})
  if(user.balance<amount){
    return res.status(400).send({message:"Insuffcient Balance"})
  }

  let bal = user.balance-amount
  let deposit = await Account.create({
    userId:user._id,
    transactionType:type,
    balance:bal,
    amount
  })

  let update = await User.updateOne({_id:user._id},{balance:bal})
  return res.status(200).send({message:"Cash Withdrawn Succesfully"})
    }catch(err){
     console.log(err)
     return res.status(400).send({ message: "Something went wrong" });
    }
}

module.exports=withdraw