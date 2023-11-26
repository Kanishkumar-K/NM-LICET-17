// Inside ImageDisplay.js
import React, { useState, useEffect } from 'react';
import './ImageDisplay.css';

const ImageDisplay = () => {
  const imageUrls = [
    'https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1900,height=600,quality=75/pageimg/iphone-15-Main-Banner.png',
    'https://rapidrepair.in/wp-content/uploads/2023/06/iPhone-15-Pro.jpeg',
    'https://rewardmobile.co.uk/wp-content/uploads/2023/09/Apple-iPhone-15-promo-banner-buy-now-scaled.jpg',
    'https://www.infifo.com/Images/a85c93a1-e850-4a08-aebc-b5f080411c1f-2023-August-22-T18-25-01-3734289-PM.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [imageUrls]);

  return (
    <div className="image-container">
      <img
        src={imageUrls[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="full-size-image"
        style={{ height: '600px' }} // Adjust the height as needed
      />
    </div>
  );
};

export default ImageDisplay;
