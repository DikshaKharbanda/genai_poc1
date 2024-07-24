// src/Navbar.js

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Navbar.css';
import About from '../../About';
import Contact_Us from '../../Contact_Us';

const Navbar = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const navigate = useNavigate();

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const togglePopup2 = () => {
        setShowPopup2(!showPopup2);
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken'); 
        navigate('/');
    };

    return (
        <div className='nav'>
            <div className='nav-logo'>
                <img src='ey_logo.png' height={70} width={70} alt="Logo" />
            </div>
            <ul className="nav-menu">
                <li><div className='test'>Home</div></li>
                <a onClick={togglePopup2}><li><div>Contact</div></li><Contact_Us show={showPopup2} handleClose={togglePopup2} /></a>
                <a onClick={togglePopup}><li><div>About Us</div></li><About show={showPopup} handleClose={togglePopup} /></a>
                <a onClick={handleLogout}>
                    <li className='nav-log_out'>Logout</li>
                </a>
            </ul>
        </div>
    );
};

export default Navbar;
