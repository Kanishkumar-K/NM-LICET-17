

import React from 'react';
import ReactDOM from 'react-dom';
import AboutUs from './AboutUs'; // Update the path accordingly

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const country = document.getElementById('country').value;
    const subject = document.getElementById('subject').value.trim();

    // Validate form inputs
    if (fname === '' || lname === '' || subject === '') {
      alert('Please fill in all required fields.');
    } else {
      // If the form is valid, display a success alert
      alert('Form submitted successfully!');
      // You can also perform additional actions here, such as making an API request
    }
  });

  ReactDOM.render(
    <React.StrictMode>
      <AboutUs />
    </React.StrictMode>,
    document.getElementById('root')
  );
});
