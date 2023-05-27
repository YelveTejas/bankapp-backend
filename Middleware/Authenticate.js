const jwt = require('jsonwebtoken')
const User = require('../Models/User')
const dotenv = require('dotenv')
dotenv.config()
const authenticate=async(req,res,next)=>{
    const token = req.headers.authorization
    const decode = jwt.verify(token,process.env.jwtkey)
   if(!token){
    res.send({message:"You are unauthorized"})
   }
  try {
    let user = await User.findOne({ _id: decode._id });
    if (user.token !== token) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    const verification = jwt.verify(token,'masai');
    next();
  } catch (e) {
    return res.status(401).send({ message: "Unauthorized" });
  }
   
}

module.exports={
    authenticate
}