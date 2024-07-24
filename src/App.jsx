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
import { AppProvider } from "../login/login/AppContext.jsx";
import About from "./Components/About.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const App = () => {

  return (
    <>
    <AppProvider>
    <Router>
      <Routes>
      <Route path="/final_page" element={<PrivateRoute><Final_page/></PrivateRoute>} />
      <Route path="/landing" element={<PrivateRoute><Landing/></PrivateRoute>} />
      <Route path="/" element={<Login_page/>} />
      {/* Add more routes as needed */}
    </Routes>
    </Router>
    </AppProvider>
    <div>
  </div>
  </>
  );
};

export default App;
