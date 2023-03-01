import React from "react";
import { Route, Routes } from "react-router-dom"; // when we click on about from nav, which route to show, 'show only about page'
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
