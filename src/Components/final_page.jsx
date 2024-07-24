import React from 'react';
import './final_page.css'; // Import your external CSS file

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAddressBook, faMale, faCalendarAlt, faIdCard, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { useAppContext } from '../../login/login/AppContext';
import Navbar from './Background/Navbar/Navbar';
const Final_page = () => {
  const { aadhaar, pan } = useAppContext();
  return (
    <>
      
      <div className="body">
        <main>
      <Navbar/>
          <h1>Personal Details</h1><br/>
          <div className="data left">
            <div className='circle left'><FontAwesomeIcon icon={faUser} className='icon' size='2x'/></div>
            <div className='content left'>
              <b>Name</b><br/>
              {aadhaar.name}
            </div>
          </div>
          <div className="data left">
            <div className='circle left'><FontAwesomeIcon icon={faAddressBook} className='icon' size='2x'/></div>
            <div className='content left'>
              <b>Address</b><br/>
           <font size ="2" > {aadhaar.address.split(" ").slice(0, 6).join(" ")}</font>
            </div>
          </div>
          <div className="data left">
            <div className='circle left'><FontAwesomeIcon icon={faMale} className='icon' size='2x'/></div>
            <div className='content left'>
              <b>Father's Name</b><br/>
              {aadhaar.father_name}
            </div>
          </div>
          <div className="data left">
            <div className='circle left'><FontAwesomeIcon icon={faCalendarAlt} className='icon' size='2x'/></div>
            <div className='content left'>
              <b>Date of Birth</b><br/>
              {pan.date_of_birth}
            </div>
          </div>
          <div className="data left">
            <div className='circle left'><FontAwesomeIcon icon={faIdCard} className='icon' size='2x'/></div>
            <div className='content left'>
              <b>PAN Number</b><br/>
              {pan.pan_number}
            </div>
          </div>
          <div className="data left">
            <div className='circle left'><FontAwesomeIcon icon={faAddressCard} className='icon' size='2x'/></div>
            <div className='content left'>
              <b>Aadhaar Number</b><br/>
              {aadhaar.aadhaar_number}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Final_page;
