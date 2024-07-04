import React from 'react';
import './final_page.css'; // Import your external CSS file

const Final_page = () => {
  return (
    <div className="body">
      <main>
        <h1>Personal Details</h1>
        <table className="details-table">
          <tbody>
            <tr>
              <td>Name:</td>
              <td>John Doe</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>123 Main Street, City, Country</td>
            </tr>
            <tr>
              <td>Date of Birth:</td>
              <td>January 1, 1990</td>
            </tr>
            <tr>
              <td>PAN Number:</td>
              <td>ABCDE1234F</td>
            </tr>
            <tr>
              <td>Aadhar Number:</td>
              <td>1234 5678 9012</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Final_page;
