import React, { useEffect, useState } from 'react';
import { useCart } from '../pages/CartContext';
import { message } from 'antd';

// Utility: Fisher-Yates shuffle
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Mobile = () => {
  const [mobiles, setMobiles] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('http://localhost:3000/mobiles')
      .then(res => res.json())
      .then(data => {
        const shuffled = shuffleArray(data); // 👈 bas yeh magic line
        setMobiles(shuffled);
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  return (
    <div>
      <div className="mobile-cards" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {mobiles.map((mobile) => (
          <div className="card" key={mobile.id} style={{ width: '250px', padding: '10px', border: '1px solid #ccc' }}>
            <img
              src={mobile.img}
              alt={mobile.name}
              style={{ width: '100%', height: '250px', objectFit: 'contain' }}
            />
            <h3>{mobile.name}</h3>
            <p>{mobile.brand}</p>
            <p>{mobile.price}</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                addToCart(mobile);
                message.success(`${mobile.name} added to cart!`);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <footer className="footer" style={{ marginTop: '50px', textAlign: 'center' }}>
        <p>&copy; 2025 Mobile Store</p>
      </footer>
    </div>
  );
};

export default Mobile;
