import React, { useRef } from "react";
import styled from "styled-components";
import "./Contact.css";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../login/login/AppContext";

const Contact = () => {
  const form = useRef();
  const { updateAadhaar, updatePan } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('aadhaar_file', form.current.user_aadhaar.files[0]);
    formData.append('pan_file', form.current.user_pan.files[0]);
    formData.append('name', form.current.user_name.value);  // Updated to 'name'
    formData.append('email', form.current.user_email.value);  // Updated to 'email'

    try {
      const response = await fetch('http://localhost:8000/verify/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        if (data.message !== undefined) {
          alert(data.message);
      }
        console.log(data);

        // Update context state
        updateAadhaar(data.aadhaar_result);
        updatePan(data.pan_result);

        // Redirect to FinalPage
        navigate(data.redirect_url);
      } else {
        const errorData = await response.json();
        alert(errorData.detail);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="form_area">
      <StyledContactForm>
        <form ref={form} onSubmit={handleSubmit} method="post">
          <label>Name <div style={{ color: "red", display: "inline" }}>*</div></label>
          <input type="text" name="user_name" required />
          <label>Email <div style={{ color: "red", display: "inline" }}>*</div></label>
          <input type="email" name="user_email" required />
          <label>Aadhaar Card <div style={{ color: "red", display: "inline" }}>*</div><br/></label>
          <input type="file" accept=".jpg,.jpeg,.png" name="user_aadhaar" required placeholder="supported formats .jpg,.jpeg,.png"/>
          <label>PAN Card <div style={{ color: "red", display: "inline" }}>*</div> <br/></label>
          <input type="file" accept=".jpg,.jpeg,.png" name="user_pan" required />
          <input type="submit" value="Verify" />
        </form>
      </StyledContactForm>
    </div>
  );
};

export default Contact;

const StyledContactForm = styled.div`
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 40%;
    font-size: 16px;
    color: white;
    margin-left: 400px;
    font-weight: bolder;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      background-color: #2e2e26;
      border: 1px solid rgb(220, 220, 220);
      color: white;

      &:focus {
        border: 2px solid yellow;
      }
    }

    label {
      margin-top: 1rem;
      padding-bottom: 10px;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #ffe600;
      color: black;
      font-weight:bold;
      border: none;
    }
  }
`;