// src/About.js

import React from "react";
import './About.css';

const About = ({ show, handleClose }) => {
    return (
        <div className={`popup ${show ? 'show' : ''}`}>
            <div className="popup-inner">
                <button className="close-btn" onClick={handleClose}>X</button>
                <div className="body">
                    <div className="header2">
                        <div className="container2">
                            <h1>About us</h1>
                        </div>
                    </div>
                    <div className="container2 main">
                        <h2>About us</h2>
                        <p>At EY, our purpose is building a better working world. The insights and services we provide help to create long-term value for clients, people and society, and to build trust in the capital markets.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
