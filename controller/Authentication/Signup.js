const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User  = require('../../Models/User')
const signup=async(req,res)=>{
    const { username, name, password, role } = req.body;
    try {
      bcrypt.hash(password, 5, async (err, secure_password) => {
        if (err) {
          console.log(err);
        } else {
          const user = new User({
            name,
            username,
            password: secure_password,
            role,
          });
          await user.save();
          res.send("Signup Successfull");
        }
      });
    } catch (err) {
      console.log(err);
      res.send("Error while Registering");
    }
}


module.exports={signup}