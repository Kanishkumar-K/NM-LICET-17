// BrandMarquee.js

import React from 'react';
import './BrandMarquee.css';

const BrandMarquee = ({ brands, speed }) => {
  const containerStyle = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    height: '40px', // Adjust the height as needed
  };

  const itemStyle = {
    marginRight: '30px', // Adjust the spacing between brand names
    fontSize: '1.8em', // Increase font size for better visibility
    animation: `marqueeAnimation ${speed}s linear infinite`,
  };

  return (
    <div className="brand-marquee-container" style={containerStyle}>
      <span className="brand-item" style={itemStyle}>
        {brands.map((brand, index) => (
          <React.Fragment key={index}>
            {index > 0 && ' '} {/* Add a space between brand names */}
            {brand}
          </React.Fragment>
        ))}
      </span>
    </div>
  );
};

BrandMarquee.defaultProps = {
  brands: [ 'Vivo', 'Oppo', 'Samsung', 'Apple', 'Xiaomi', 'OnePlus', 'Realme',
  'Google', 'Huawei', 'Motorola', 'Nokia', 'LG', 'Sony', 'HTC',
  'Blackberry', 'Lenovo', 'Asus', 'ZTE', 'Alcatel', 'Sharp', 'TCL',
  'Meizu', 'Infinix', 'Panasonic', 'Micromax', 'Gionee', 'Lava', 'Nubia'],
  speed: 30, // Slower speed in seconds
};

export default BrandMarquee;
