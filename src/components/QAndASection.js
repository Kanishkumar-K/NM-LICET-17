// QandASection.js

import React from 'react';

const QandASection = () => {
  const sectionStyle = {
    textAlign: 'left',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    marginTop: '20px',
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
  };

  const questionStyle = {
    marginBottom: '15px',
    borderBottom: '2px solid #333', // Border for each question
    paddingBottom: '10px',
  };

  const questionTextStyle = {
    fontSize: '1.2em',
    fontWeight: 'bold', // Bold font for questions
    color: '#333',
  };

  const answerStyle = {
    marginTop: '10px',
    color: '#555',
    fontSize: '1em', // Slightly reduced font size for answers
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '15px', color: '#333' }}>Frequently Asked Queries</h2>

        <div style={questionStyle}>
          <h3 style={questionTextStyle}>Q: How do I place an order on Mobeaze?</h3>
          <p style={answerStyle}>
            A: To place an order, navigate to the product you want, click "Place an order," and follow the checkout process.
          </p>
        </div>

        <div style={questionStyle}>
          <h3 style={questionTextStyle}>Q: Are there any discounts or promotions available?</h3>
          <p style={answerStyle}>
            A: Check our promotions page for the latest discounts and special offers on mobile devices.
          </p><br />
        </div>

        {/* Add more Q&A pairs as needed */}

      </div>
    </section>
  );
};

export default QandASection;
