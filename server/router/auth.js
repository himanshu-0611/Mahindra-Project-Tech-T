const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`Hello world from server auth.js`);
});

router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
  //we wont see register page on browser as this is post request
    // console.log(name);
    // console.log(email);

//   if (!name || !email || !phone || !work || !password || !cpassword) {
    // if user doesnt fill any field, we return
    // return res.status(422).json({ error: "Fill properly" });
//   }

    res.json({ message: req.body });
  // res.send("mera register page")

  
});

module.exports = router;
