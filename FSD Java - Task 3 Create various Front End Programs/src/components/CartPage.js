// CartPage.jsx

import React, { useState } from 'react';

const CartPage = () => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const addToCart = () => {
    // Your logic to add the item to the cart

    // Simulate adding to cart
    // In a real application, you'd probably make an API call or update a global state
    // Here, we just set a state to simulate the item being added to the cart
    setOrderConfirmed(true);

    // Simulate a delay before redirecting
    setTimeout(() => {
      // Redirect to another page
      window.location.href = '/thank-you'; // Replace with your desired URL
    }, 3000); // Redirect after 3 seconds (adjust the delay as needed)
  };

  return (
    <div>
      <h1>Cart Page</h1>
      {!orderConfirmed ? (
        <>
          <p>Product details...</p>
          <button onClick={addToCart}>Add to Cart</button>
        </>
      ) : (
        <p>Your order was confirmed. Thank you!</p>
      )}
    </div>
  );
};

export default CartPage;
