const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:3000/register",
//   })
// );

dotenv.config({ path: "./config.env" }); 

require("./db/conn");

app.use(express.json()) 
// const User = require("./model/userSchema");

//we link the router file to make our route
app.use(require("./router/auth"));

const PORT = process.env.PORT;

// Middleware


const middleware = (req, res, next) => {
  console.log(`Hello my middleware`);
  next();
};

// app.get("/", (req, res) => {
//   res.send(`Hello world from server auth.js`);
// });

app.get("/about", middleware, (req, res) => {
  res.send(`Hello about from server`);
});

app.get("/contact", (req, res) => {
  res.send(`Hello contact from server`);
});

app.get("/signin", (req, res) => {
  res.send(`Hello signin from server`);
});

// app.get("/register", (req, res) => {
//   res.send(`Hello register from server`);
// });

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
