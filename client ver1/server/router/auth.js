const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate")

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`Hello world from server auth.js`);
});

router.post("/register", async (req, res) => {
  // ===================================== Using Async ===============================================

  const { name, email, phone, work, password, cpassword } = req.body;

  //we wont see register page on browser as this is post request

  if (!name || !email || !phone || !work || !password || !cpassword) {
    // if user doesnt fill any field, we return

    return res.status(422).json({ error: "Fill properly" });
  }
  try {
    // we will wait, as after sometime we are going to know if that email already exists, did we get the response or not
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "email already exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "passwords not matching" });
    } else {
      // if user doesn't exist, then we have to register him, so we have to create his own document
      const user = new User({ name, email, phone, work, password, cpassword });

      //In the future we are going to get the data, either it will register or it won't, we store the response in userRegister

      //before saving, password is hashed, look in userSchema

      await user.save();
      res.status(201).json({ message: "Stored successfully" }); // we dont need if else below, coz if we are reaching till here, all is good
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  // console.log(req.body);
  try {
    let token;
    const { email, password } = req.body; // if any one of the fields is not entered while login
    if (!email || !password) {
      return res.status(400).json({ error: "fill the data" });
    }

    const userLogin = await User.findOne({ email: email }); // the data which might come for that server is waiting and that data will be either fullfilled or rejected

    console.log(userLogin);

    if (userLogin) { 
      // if matching email is found
      const isMatch = bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log(token);

      //storing token in cookie
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000), //30 days
        httpOnly: true, //now we are not secure, so it should work on http only also
      });

      if (!isMatch) {
        // also checking if passwords matching
        res.status(400).json({ error: "invalid ceredential: password" });
      } else {
        res.json({ message: "user signin successfull" });
      }
    } else {
      // email doesnt match
      res.status(400).json({ message: "invalid ceredential: email" });
    }
  } catch (err) {
    console.log(err);
  }
});

// about us page
router.get("/about", authenticate, (req, res) => {
  console.log("Hello in /about")
  res.send(req.rootUser);
});


//get user data from contact and home page
router.get('/getdata', authenticate, (req, res) => {
    console.log("Hello in /about");
    res.send(req.rootUser);
})

module.exports = router;
