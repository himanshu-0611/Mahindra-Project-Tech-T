const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`Hello world from server auth.js`);
});

router.post("/register", async (req, res) => {
  // ===================================== Using Promises ===============================================

  // const { name, email, phone, work, password, cpassword } = req.body;
  // //we wont see register page on browser as this is post request
  // // console.log(name);
  // // console.log(email);

  // if (!name || !email || !phone || !work || !password || !cpassword) {
  //   // if user doesnt fill any field, we return
  //   return res.status(422).json({ error: "Fill properly" });
  // }

  // res.json({ message: req.body });

  // // if user is already existing
  // //the email which we have defined in database matches with the input email or not || the email at lhs is of database field
  // User.findOne({ email: email })
  //   .then((userExist) => {
  //     if (userExist) {
  //       return res.status(422).json({ error: "email already exists" });
  //     }

  //     // if user doesn't exist, then we have to register him, so we have to create his own document
  //     const user = new User({ name, email, phone, work, password, cpassword });

  //     user
  //       .save()
  //       .then(() => {
  //         res.status(201).json({ message: "Stored successfully" });
  //       })
  //       .catch((err) => res.status(500).json({ error: "Failed to register" }));
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // ===================================== Using Async ===============================================

  const { name, email, phone, work, password, cpassword } = req.body;
  //we wont see register page on browser as this is post request
  // console.log(name);
  // console.log(email);

  if (!name || !email || !phone || !work || !password || !cpassword) {
    // if user doesnt fill any field, we return
    return res.status(422).json({ error: "Fill properly" });
  }

  try {
    // we will wait, as after sometime we are going to know if that email already exists, did we get the response or not

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "email already exists" });
    }

    // if user doesn't exist, then we have to register him, so we have to create his own document
    const user = new User({ name, email, phone, work, password, cpassword });

    //In the future we are going to get the data, either it will register or it won't, we store the response in userRegister

    await user.save();

    res.status(201).json({ message: "Stored successfully" }); // we dont need if else below, coz if we are reaching till here, all is good

    // const userRegister = await user.save();

    // if (userRegister) {
    //   res.status(201).json({ message: "Stored successfully" });
    // } else {
    //   res.status(500).json({ error: "Failed to register" }); //we dont even need this else cause we are catching the error at last
    // }

    // .then((userExist) => {
    //   if (userExist) {
    //     return res.status(422).json({ error: "email already exists" });
    //   }

    //   user
    //     .save()
    //     .then(() => {
    //       res.status(201).json({ message: "Stored successfully" });
    //     })
    //     .catch((err) => ));
    // });
  } catch (err) {
    console.log(err);
  }
  // if user is already existing
  //the email which we have defined in database matches with the input email or not || the email at lhs is of database field
  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "email already exists" });
      }

      // if user doesn't exist, then we have to register him, so we have to create his own document
      const user = new User({ name, email, phone, work, password, cpassword });

      user
        .save()
        .then(() => {
          res.status(201).json({ message: "Stored successfully" });
        })
        .catch((err) => res.status(500).json({ error: "Failed to register" }));
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
