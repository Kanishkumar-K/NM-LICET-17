// BrandSection.js

import React, { useState, useEffect } from 'react';

const BrandSection = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    // Fetch brand data from an API or use static data
    // For example:
    // fetch('https://api.example.com/brands')
    //   .then(response => response.json())
    //   .then(data => setBrands(data));

    // For demonstration purposes, using static data
    const staticData = [
      { id: 1, name: 'Oppo', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/OPPO_Logo_wiki.png/640px-OPPO_Logo_wiki.png' },
      { id: 2, name: 'Vivo', logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ64H9x_kpmaxte5VgiMQkJ3wiQFjkuBMgJ5gm2T8q4&s' },
      { id: 3, name: 'Samsung', logoUrl: 'https://images.samsung.com/is/image/samsung/assets/in/about-us/brand/logo/mo/256_144_1.png?$512_N_PNG$' },
      { id: 4, name: 'Redmi', logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAKnwJOuV2Sogh-jGWaq2-QOPF5vKHyhqAs2_Ucsz&s' },
      { id: 5, name: 'Realme', logoUrl: 'https://www.livemint.com/rf/Image-920x613/LiveMint/Period2/2018/11/16/Photos/Home%20Page/GO%20(77)-kjmB--621x414@LiveMint.png' },
      // Add more brands as needed
    ];

    setBrands(staticData);
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Featured Brands</h3><br /><br />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {brands.map(brand => (
          <div key={brand.id} style={{ margin: '0 20px' }}>
            <img
              src={brand.logoUrl}
              alt={`${brand.name} Logo`}
              style={{ width: '100px', height: '100px' }}
            />
            <p>{brand.name}</p><br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSection;
