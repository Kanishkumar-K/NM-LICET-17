// Import necessary libraries
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import UserProfile from './UserProfile';
import './Header.css';
import AboutUs from './AboutUs';

// Functional component for the header
const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleProfileClick = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogin = () => {
    // Placeholder logic for login
    console.log('Login clicked');
    const loginWindow = window.open('', '_self');

  if (loginWindow) {
    loginWindow.document.write(`
      <!-- Your login page HTML and styles go here -->

      <html>
      <head>
        <title>Login</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            text-align: center;
            background-color: #f4f4f4;
            padding: 50px;
          }
          h1 {
            color: #333;
            margin-bottom: 30px;
          }
          form {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          label {
            margin-bottom: 10px;
            font-size: 18px;
          }
          input {
            padding: 10px;
            margin-bottom: 20px;
            width: 300px;
            font-size: 16px;
          }
          button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #4CAF50;
            color: #fff;
            border: none;
            cursor: pointer;
          }
          .error-message {
            color: red;
            margin-top: 10px;
          }
        </style>
      </head>
      <body>
        <h1>LOGIN</h1>
        <form id="loginForm">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" />
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button type="button" onclick="validateLogin()">Login</button><br>
          <h5>Username: admin, password: test</h5>
          <div id="errorMessage" class="error-message"></div>
        </form>

    `);

    

    // Validate login and redirect to home on success
    loginWindow.validateLogin = () => {
      const username = loginWindow.document.getElementById('username').value;
      const password = loginWindow.document.getElementById('password').value;

      if (username === 'admin' && password === 'test') {
        window.alert('Login successful!');
        loginWindow.location.href = './UserProfile.html';
      } else {
        loginWindow.document.getElementById('errorMessage').innerText = 'Invalid username or password.';
      }
    };
  }
};

  const handleLogout = () => {
    // Placeholder logic for logout
    console.log('Logout clicked');
  };

  return (
    <div className="header">
      {/* Logo */}
      <div className="logo">
        <h2>Mobeaze</h2>
      </div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

      {/* Search input */}
      <div className="search">
  <input
    type="text"
    placeholder="Search..."
    className="search-input"
    style={{ width: '300px' }} // Set the desired width here
  />


  <FontAwesomeIcon icon={faSearch} className="search-icon" />

</div>

      {/* User profile icon with dropdown */}
      <div className="user-profile" onClick={handleProfileClick}>
        <FontAwesomeIcon icon={faUser} className="profile-icon" />
        {isUserMenuOpen && (
          <div className="user-menu">
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>

    
  );

  
};


export default Header;

