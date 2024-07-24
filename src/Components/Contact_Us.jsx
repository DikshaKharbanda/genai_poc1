// src/Contact_Us.js

import React from "react";
import './Contact_Us.css';

const Contact_Us = ({ show, handleClose }) => {
    return (
        <div className={`popup ${show ? 'show' : ''}`}>
            <div className="popup-inner">
                <button className="close-btn" onClick={handleClose}>X</button>
                <div className="body">
                    <div className="header2">
                        <div className="container2">
                            <h1>Contact Us </h1>
                           
                        </div>
                    </div>
                    <div className="container2 main">
                        <h2>How can we help?</h2>
                        <p>We appreciate your interest in EY. Connect with an EY professional, find an office or stay informed by subscribing to one of our newsletters.</p>
                        <p>Phone: +1 800 123 4567<br></br>
                        Email: info@ey.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact_Us;
