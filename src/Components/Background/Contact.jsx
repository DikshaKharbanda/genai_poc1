import React, { useRef } from "react";
import styled from "styled-components";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For demonstration purposes, simulate navigation
    window.location.href = '/contact'; // Simulate navigation to /contact
  };

  return (
    <div className="form_area">
      <StyledContactForm>
        <form ref={form} onSubmit={sendEmail} method="post">
          <label>Name <div style={{color:"red",display:"inline"}}>*</div></label>
          <input type="text" name="user_name" required />
          <label>Email<div style={{color:"red",display:"inline"}}>*</div></label>
          <input type="email" name="user_email" />
          <label>Aadhar Card <div style={{color:"red",display:"inline"}}>*</div></label>
          <input type="file" name="user_aadhar" />
          <label>PAN Card <div style={{color:"red",display:"inline"}}>*</div></label>
          <input type="file" name="user_pan" />
          <input type="submit" value="Verify" />
        </form>
      </StyledContactForm>
    </div>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 40%;
    font-size: 16px;
    color: white;
    margin-left: 400px;
    font-weight:bolder;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      background-color: #2e2e26;
      border: 1px solid rgb(220, 220, 220);
      color:white;

      &:focus {
        border: 2px solid yellow;
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
      padding-bottom:10px;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background:#ffe600;
      color: white;
      border: none;
    }
  }
`;
