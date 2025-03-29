

import React, { useEffect, useState } from 'react';

const Mobile = () => {
  const [mobiles, setMobiles] = useState([]);

  // Fetch the data from the JSON Server
  useEffect(() => {
    fetch('http://localhost:3000/mobiles')
      .then(response => response.json())
      .then(data => setMobiles(data));
  }, []);

  return (
    <div>
      {/* Mobile Cards Grid */}
      <div className="mobile-cards">
        {mobiles.map((mobile) => (
          <div className="card" key={mobile.id}>
            <img 
              src={mobile.img} 
              alt={mobile.name} 
              className="card-img" 
              style={{ width: '100%', height: 'auto' }} 
            />
            <h3>{mobile.name}</h3>
            <p>{mobile.brand}</p>
            <p>{mobile.price}</p>
          </div>
        ))}
      </div>

    
      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Mobile Store</p>
      </footer>
    </div>
  );
};

export default Mobile;
