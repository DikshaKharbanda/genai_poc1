import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./Background/Background";
import Navbar from "./Background/Navbar/Navbar";
import Hero from "./Background/Navbar/Hero/Hero";
import Contact from "./Background/Contact";

const Landing = () => {
  let heroData = [
    {text1: "Verify with ease, trust with confidence" },
    { text1: "Secure identity, seamless service." },
    { text1: "Simplifying KYC for a safer tomorrow." },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playState, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div>
    <Background playStatus={playState} heroCount={heroCount} />
    <Navbar />
    
    {/* Use <Routes> to wrap your <Route> components */}
    
    
    <Hero
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playState}
    />
    <Contact/>
  </div>
  </>
  );
};

export default Landing;
