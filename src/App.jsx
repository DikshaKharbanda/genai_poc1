import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./Components/Background/Background.jsx";
import Navbar from "./Components/Background/Navbar/Navbar.jsx";
import Hero from "./Components/Background/Navbar/Hero/Hero.jsx";
import Contact from "./Components/Background/Contact.jsx";
import Final_page from "./Components/final_page.jsx";
import Login from "./Components/login.jsx";
import Login_page from "./Components/Login_page.jsx";
import Landing from "./Components/Landing.jsx";

const App = () => {

  return (
    <>
    <Router>
      <Routes>
      <Route path="/contact" element={<Final_page/>} />
      <Route path="/landing" element={<Landing/>} />
      <Route path="/" element={<Login_page/>} />
      {/* Add more routes as needed */}
    </Routes>
    </Router>
    <div>
  </div>
  </>
  );
};

export default App;
