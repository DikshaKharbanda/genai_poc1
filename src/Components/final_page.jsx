import React from 'react';
import './final_page.css'; // Import your external CSS file
import Navbar from './Background/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faAddressBook,faMale,faCalendarAlt, faIdCard, faAddressCard } from '@fortawesome/free-solid-svg-icons';

const Final_page = () => {
  return (
    <>
      <Navbar/>
    <div className="body">
      <main>
        <h1>Personal Details</h1><br/>
        <div className="data left">
        <div className='circle left'><FontAwesomeIcon icon={faUser} className='icon' size='2x'/></div>
        <div className='content left'>
          <b>Name</b><br/>
          John Doe</div></div>
          <div className="data left">
        <div className='circle left'><FontAwesomeIcon icon={faAddressBook} className='icon' size='2x'/></div>
        <div className='content left'>
          <b>Address</b><br/>
          123 Main Street, City, Country</div></div>
          <div className="data left">
        <div className='circle left'><FontAwesomeIcon icon={faMale} className='icon' size='2x'/></div>
        <div className='content left'>
          <b>Father's Name</b><br/>
          Peter Doe</div></div>
          <div className="data left">
        <div className='circle left'><FontAwesomeIcon icon={faCalendarAlt} className='icon' size='2x'/></div>
        <div className='content left'>
          <b>Date of Birth</b><br/>
          January 1, 1990</div></div>
          <div className="data left">
        <div className='circle left'><FontAwesomeIcon icon={faIdCard} className='icon' size='2x'/></div>
        <div className='content left'>
          <b>PAN Number</b><br/>
          ABCDE1234F</div></div>
          <div className="data left">
        <div className='circle left'><FontAwesomeIcon icon={faAddressCard} className='icon' size='2x'/></div>
        <div className='content left'>
          <b>Aadhar Number</b><br/>
          1234 5678 9012</div></div>
      </main>
    </div>
    </>
  );
};

export default Final_page;
