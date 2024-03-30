// src/Home.js

import React from 'react';
import './Home.css';
import ImageDisplay from './ImageDisplay';
import useCart from '../hooks/useCart';
import BrandSection from './BrandSection';
import QAndASection from './QAndASection';
import BrandMarquee from './BrandMarquee';
import AboutUs from './AboutUs';
import { FaMale, FaFemale } from 'react-icons/fa';


const Home = () => {
      
  const { addToCart } = useCart();
  
  
  const handleAddToCart = (productName, description, price, imageUrl) => {
    addToCart({
      productName,
      price,
      imageUrl,
    });

    // Open a new window with the "Thanks for your order" message
    window.alert("Item Available! Would you like to place your order?")

      // Open a new window with the order confirmation page
      const newWindow = window.open('', '_blank');
      newWindow.document.write(`
      <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            text-align: center;
            background: linear-gradient(to right, #F9EBEA, #FDF2E9);
            color: #000;
            padding: 20px;
          }
          h1 {
            color: #4CAF50;
            margin-top: 50px;
          }
          .order-details {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 30px;
          }
          .product-details {
            text-align: left;
            margin-right: 50px;
          }
          .product-img {
            width: 300px;
            height: auto;
            cursor: pointer;
            transition: transform 0.3s ease-in-out;
          }
          .product-img:hover {
            transform: scale(1.1);
          }
          .payment-section {
            text-align: left;
          }
          .status-msg {
            margin-top: 30px;
            font-style: italic;
            color: #777;
            text-align: center;
          }
          button {
            font-size: 16px;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: #fff;
            border: none;
            cursor: pointer;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <h1>Order Placed Successfully!</h1>
        <div class="order-details">
          <div class="product-details">
            <img class="product-img" src="${imageUrl}" alt="Product Image">
            <h2>${productName}</h2>
            <p>${description}</p>
            <p>Price: ₹${price}</p>
          </div>
          <div class="payment-section">
            <h2>Order Summary</h2>
            <p>${productName} - ₹${price}</p>
            <p>Total: ₹${price}</p>
          
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mobeaze- Payment site</title>
            <style>
            body {
                margin: 0;
                font-family: 'Arial', sans-serif;
            }
        
            button {
                padding: 10px;
                font-size: 16px;
                cursor: pointer;
            }
        
            .overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.7);
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                z-index: 1000;
            }
        
            .overlay-content {
                text-align: center;
                background-color: #333;
                padding: 20px;
                border-radius: 8px;
            }
        
            ul {
                list-style: none;
                padding: 0;
            }
        
            li {
                margin: 10px 0;
            }
        
            /* Adjustments for better alignment */
            input[type="radio"] {
                margin-right: 5px;
            }
        
            input[type="text"] {
                padding: 8px;
                margin-right: 10px;
            }
        
            button {
                background-color: #4CAF50;
                color: #fff;
                border: none;
                border-radius: 4px;
                padding: 10px 20px;
                cursor: pointer;
            }
        
            button:hover {
                background-color: #45a049;
            }
        </style>
        
        </head>
        <body>
        
            <button onclick="proceedToPayment()">Proceed to Payment</button>
        
            <script>
                function proceedToPayment() {
                    // Create a full-screen overlay
                    const overlay = document.createElement('div');
                    overlay.className = 'overlay';
        
                    // HTML content for the overlay
                    const overlayContent =
                        '<div class="overlay-content">' +
                        '<h1>Select Payment Mode</h1>' +
                        '<ul>' +
                        '<li><label><input type="radio" name="paymentMode" value="netBanking"> Net Banking</label></li>' +
                        '<li><label><input type="radio" name="paymentMode" value="upi"> Mobile Wallet</label></li>' +
                        '<li><label><input type="radio" name="paymentMode" value="upi"> UPI</label></li>' +
                        '<li><label><input type="radio" name="paymentMode" value="upi"> Credit card Transaction</label></li>' +
                        '<li><label><input type="radio" name="paymentMode" value="upi"> Debit card Transaction</label></li>' +
                        '</ul>' +
                        '<input type="text" placeholder="Enter PIN" id="pinInput">' +
                        '<button onclick="processPayment()">Pay Now</button>&nbsp;&nbsp;' +
                        '<button onclick="closeOverlay()">Close</button>' +
                        '</div>';
        
                    // Set the HTML content for the overlay
                    overlay.innerHTML = overlayContent;
        
                    // Append the overlay to the body
                    document.body.appendChild(overlay);
                }
        
                function processPayment() {
                    const selectedPaymentMode = document.querySelector('input[name="paymentMode"]:checked');
                    const pinInput = document.getElementById('pinInput');
        
                    if (selectedPaymentMode && pinInput.value.trim() !== '') {
                        // Perform payment processing logic here
        
                        // For simplicity, just displaying a success message with product details
                        const productName = 'Your Product Name';
                        const productPrice = '$99.99';
        
                        alert("Payment successful! Shipping is on the way");
        
                        closeOverlay();
                        window.location.href = './Home';

                    } else {
                        alert('Please select a payment mode and enter a PIN.');
                    }
                }
        
                function closeOverlay() {
                    const overlay = document.querySelector('.overlay');
                    overlay.parentNode.removeChild(overlay);
                }
            </script>
        </body>
        </html>
        

    `);
  };

   
const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
};

const h1Style = {
  fontSize: '2.5em',
  marginBottom: '10px',
  color: '#333',
};

const pStyle = {
  fontSize: '1.2em',
  lineHeight: '1.5',
  color: '#555',
};

const headerStyle = {
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  marginBottom: '20px',
};

  return (
    <div style={{ textAlign: 'center', backgroundColor: '#f4f4f4', padding: '20px' }}>
      {/* Header */}
      <header style={headerStyle}>
        <div style={containerStyle}>
          <h1 style={h1Style}>Welcome to Mobeaze E-Shopping Site</h1>
          <p style={pStyle}>
            Discover the latest trends and shop your favorite brands.
          </p>
          <br />
        </div>
        </header>
  

        <ImageDisplay />

      {/* Featured Products */}
      <section className="featured-products">
        <div className="section-container">
          <h2>Featured Products</h2>
          <div className="product-list">
            {/* Product 1 */}
<div className="product-card">
  <img src="https://m.media-amazon.com/images/I/71PjpS59XLL._SX679_.jpg" alt="Product 1" />
  <h3>Apple iPhone 15 Plus</h3>
  <p>Blue-128GB</p>
  <p>₹87,900 INR</p>
  <button onClick={() => handleAddToCart('Apple iPhone 15 Plus', 'Blue-128GB', '87,900 INR', 'https://m.media-amazon.com/images/I/71PjpS59XLL._SX679_.jpg')}>Place an order</button>
</div>

{/* Product 2 */}
<div className="product-card">
  <img src="https://m.media-amazon.com/images/I/71v2jVh6nIL._SX679_.jpg" alt="Product 2" />
  <h3>Apple iPhone 15 Plus</h3>
  <p>Pink-128GB</p>
  <p>₹87,900 INR</p>
  <button onClick={() => handleAddToCart('Apple iPhone 15 Plus', 'Pink-128GB', '87,900 INR', 'https://m.media-amazon.com/images/I/71v2jVh6nIL._SX679_.jpg')}>Place an order</button>
</div>

{/* Product 3 */}
<div className="product-card">
  <img src="https://m.media-amazon.com/images/I/71tCOhEigtL._SX679_.jpg" alt="Product 3" />
  <h3>Xiaomi Redmi 12 5G</h3>
  <p>Black-128GB</p>
  <p>₹15,499 INR</p>
  <button onClick={() => handleAddToCart('Xiaomi Redmi 12 5G', 'Black-128GB', '15,499 INR', 'https://m.media-amazon.com/images/I/71tCOhEigtL._SX679_.jpg')}>Place an order</button>
</div>

{/* Product 4 */}
<div className="product-card">
  <img src="https://m.media-amazon.com/images/I/81fNK5+o63L._SX679_.jpg" alt="Product 4" />
  <h3>OPPO A79 5G</h3>
  <p>Cyan-128GB</p>
  <p>₹19,999 INR</p>
  <button onClick={() => handleAddToCart('OPPO A79 5G', 'Cyan-128GB', '19,999 INR', 'https://m.media-amazon.com/images/I/81fNK5+o63L._SX679_.jpg')}>Place an order</button>
</div>

{/* Product 5 */}
<div className="product-card">
  <img src="https://m.media-amazon.com/images/I/91ItZJh1FDL._SX679_.jpg" alt="Product 5" />
  <h3>SAMSUNG Galaxy M34 5G</h3>
  <p>Prism Silver-128GB</p>
  <p>₹18,999</p>
  <button onClick={() => handleAddToCart('SAMSUNG Galaxy M34 5G', 'Prism Silver-128GB', '18,999 INR', 'https://m.media-amazon.com/images/I/91ItZJh1FDL._SX679_.jpg')}>Place an order</button>
</div>

{/* Product 6 */}
<div className="product-card">
  <img src="https://m.media-amazon.com/images/I/61abLrCfF7L._SX679_.jpg" alt="Product 6" />
  <h3>OnePlus Nord CE3 5G</h3>
  <p>Black-128GB</p>
  <p>₹27,000</p>
  <button onClick={() => handleAddToCart('OnePlus Nord CE3 5G', 'Black-128GB', '27,000 INR', 'https://m.media-amazon.com/images/I/61abLrCfF7L._SX679_.jpg')}>Place an order</button>
</div>

{/* Product 7 */}
<div className="product-card">
  <img src="https://m.media-amazon.com/images/I/41ZR-vmwWXL._SX300_SY300_QL70_FMwebp_.jpg" alt="Product 7" />
  <h3>Realme 11 5G</h3>
  <p>Peach-128GB</p>
  <p>₹19,999</p>
  <button onClick={() => handleAddToCart('Realme 11 5G', 'Peach-128GB', '19,999 INR', 'https://m.media-amazon.com/images/I/41ZR-vmwWXL._SX300_SY300_QL70_FMwebp_.jpg')}>Place an order</button>
</div>

{/* Product 8 */}
<div className="product-card">
  <img src="https://m.media-amazon.com/images/I/31GSWJd33qL._SX300_SY300_QL70_FMwebp_.jpg" alt="Product 8" />
  <h3>SAMSUNG Galaxy Z Fold5 5G</h3>
  <p>Phantom Black-128GB</p>
  <p>₹1,64,999</p>
  <button onClick={() => handleAddToCart('SAMSUNG Galaxy Z Fold5 5G', 'Phantom Black-128GB', '1,64,999 INR', 'https://m.media-amazon.com/images/I/31GSWJd33qL._SX300_SY300_QL70_FMwebp_.jpg')}>Place an order</button>
</div>
          </div>
        </div>
      </section><br /> <br />

      <section className="youtube-video">
        <div>
          <iframe
            width="800"
            height="350"
            src="https://www.youtube.com/embed/xqyUdNxWazA?si=hR3k8vxbCTY3dnQ_"
            title="iPhone 15 Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section><br />

      {/* User Reviews Section */}
      <section style={userReviewsStyle}>
        <div style={sectionContainerStyle}>
          <h2>User Reviews</h2>
          <div style={reviewListStyle}>
            {/* Review 1 */}
            <div style={reviewCardStyle}>
              <h3>Great Shopping Experience!</h3>
              <p>I recently had the pleasure of shopping on this e-commerce site, and it exceeded my expectations.</p>
              <p><FaFemale  /> - Satyavarssheni Ra V, India</p>
            </div>

            {/* Review 2 */}
            <div style={reviewCardStyle}>
              <h3>Impressive Product Quality!</h3>
              <p>The products I ordered from this e-commerce site are top-notch! The attention to detail and quality is evident in every item.</p>
              <p><FaMale /> - Kanishkumar K, India</p>
            </div>

            {/* Review 3 */}
            <div style={reviewCardStyle}>
              <h3>Reliable and Trustworthy!</h3>
              <p>I recently bought an iPhone as a gift for my girlfriend, and it turned out to be the perfect choice!.</p>
              <p><FaMale /> - Cyril Martin S, India</p>
            </div>

            {/* Additional Review */}
            <div style={reviewCardStyle}>
              <h3>Exceptional Service and Fast Shipping!</h3>
              <p>I recently made a purchase on this e-commerce site, and I'm impressed with the exceptional service.</p>
              <p><FaFemale /> - Alan Judith A, India</p>
            </div>
          </div>
        </div>
      </section>


      {/* Brand Section */}
      <BrandSection />

      {/* Q&A Section */}
      <QAndASection />
    </div>
  );
};

// Rest of the code remains the same...
const userReviewsStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const sectionContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const reviewListStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
};

const reviewCardStyle = {
  width: '300px',
  margin: '20px',
  padding: '15px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f9f9f9', // Light shaded background color
};

// Add styles for the sidebar
const sidebarStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#eee',
  padding: '20px',
  borderRadius: '8px',
  margin: '20px',
};

const userIconStyle = {
  fontSize: '2em',
  margin: '10px',
};

export default Home;
