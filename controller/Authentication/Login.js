const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User  = require('../../Models/User')
const dotenv = require('dotenv')
dotenv.config()
const login =async(req,res)=>{
    const { username, password } = req.body;
    try {
      const user = await User.find({ username });
  
      if (user.length > 0) {
        bcrypt.compare(password, user[0].password, (err, result) => {
          if (result) {
            const token = jwt.sign({user}, process.env.jwtkey);
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