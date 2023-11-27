// UserProfile.js

import React from 'react';

const UserProfile = () => {
  // You can retrieve user details from your authentication system
  const user = {
    email: 'admin@gmail.com',
    password: 'admin123',
    mobile: '1234567890',
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
      <p>Mobile: {user.mobile}</p>
      <button onClick={() => window.location.href = '/shopping'}>Go to Shopping Page</button>
    </div>
  );
};

export default UserProfile;
