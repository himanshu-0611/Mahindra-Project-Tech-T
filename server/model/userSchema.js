const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  work: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  cpassword: {
    type: String,
    require: true,
  },
  tokens: [
    //token doesn't generate only one time, as user will login multiple times, so we generate different each time
    {
      token: {
        type: String,
        require: true,
      },
    },
  ],
});

// we are hashing the password

userSchema.pre("save", async function (next) {
  // when we need this keyword, it works totally opposite when we use arrow function, this function returns promises, so we make it async
  console.log("inside");
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

//we are generating token
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY); //jwt.sign(payload, sercretOrPrivateKey, [options, callback]) --- payload: unique, from db use id field
    //we know that id belongs to which email id and we generate token for that particular email id
    this.tokens = this.tokens.concat({ token: token }); //we are setting token which is generated above in our db fields
    await this.save(); //we are saving token, save returns promise so we use await
    return token;
  } catch (err) {
    console.log(err);
  }
};

const User = mongoose.model("USER", userSchema); //User is what is in collection - users

module.exports = User;
