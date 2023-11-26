// Import necessary libraries
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

// Functional component for the header
const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleProfileClick = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogin = () => {
    // Placeholder logic for login
    console.log('Login clicked');

    // Open a new window with the styled login page content
    const loginWindow = window.open('', '_self');
    loginWindow.document.write(`
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
          <script>
            function validateLogin() {
              var username = document.getElementById('username').value;
              var password = document.getElementById('password').value;

              if (username === 'admin' && password === 'test') {
                window.alert('Login successful!');
                window.close();
                const loginWindow = window.open('./Home', '_self');
              } else {
                document.getElementById('errorMessage').innerText = 'Invalid username or password.';
              }
            }
          </script>
        </body>
      </html>
    `);
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
      </div>

      {/* Search input */}
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
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
