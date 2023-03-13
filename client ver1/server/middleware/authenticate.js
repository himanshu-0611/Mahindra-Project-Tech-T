const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const cookieParser = require("cookie-parser");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken; //getting the token from browser
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    //all details now in verifytoken, we can get user data from that
    //now we will get which user's token it is
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("User not found");
    }
    //filling all details
    req.token = token;
    req.rootUser = rootUser; //all data of user
    req.userID = rootUser._id;
    next(); //if we dont use this, it will be stuck in this middleware only
  } catch (err) {
    res.status(401).send("Unauthorized: no token provided");
    console.log(err);
  }
};

module.exports = [cookieParser(), Authenticate];

// const jwt = require("jsonwebtoken");
// const User = require("../model/userSchema");
// const cookieParser = require("cookie-parser");
// const express = require("express");
// const app = express();

// // app.use(cookieParser());

// const Authenticate = async (req, res, next) => {
//   try {
//     const token = req.cookies.jwtoken; //getting the token from browser
//     const verifyToken = jwt.verify(token, process.env.SERCRET_KEY);

//     //all details now in verifytoken, we can get user data from that
//     //now we will get which user's token it is
//     const rootUser = await User.findOne({
//       _id: verifyToken._id,
//       "tokens.token": token,
//     });

//     if (!rootUser) {
//       throw new Error("User not found");
//     }
//     //filling all details
//     req.token = token;
//     req.rootUser = rootUser; //all data of user
//     req.userID = rootUser._id;
//     next(); //if we dont use this, it will be stuck in this middleware only

//   } catch (err) {
//     res.status(401).send("Unauthorized: no token provided");
//     console.log(err);
//   }
// };

// module.exports = Authenticate;
