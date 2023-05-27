const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User  = require('../../Models/User')
const dotenv = require('dotenv')
dotenv.config()
const login =async(req,res)=>{
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
     
      if (user) {
        bcrypt.compare(password, user.password, async(err, result) => {
          if (result) {
            const token = jwt.sign({
              _id:user._id,
              name:user.name,
              username:user.username
            },'masai');
            let set = await User.updateOne({ _id:user._id }, { token }); 
            res.send({ msg: "Login Successfull", token: token });
          } else {
            console.log(err);
            res.send('Wrong Password')
          }
        });
      } else {
        res.send("Wrong Credentials");
      }
    } catch (err) {
      console.log(error);
      res.send("Something Went Wrong");
    }
}


module.exports={
    login
}