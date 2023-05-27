const jwt = require("jsonwebtoken");
const User = require("../../Models/User");

const customer = async(req,res)=>{
    try{
  let customers = await User.find({role:"customer"},{password:0,role:0,})
    }catch{

    }
}