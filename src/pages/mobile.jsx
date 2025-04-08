import React, { useEffect, useState } from 'react';
import { useCart } from '../pages/CartContext';
import { message } from 'antd';

const Mobile = () => {
  const [mobiles, setMobiles] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('http://localhost:3000/mobiles')
      .then(response => response.json())
      .then(data => {
        // Sabhi images nikal lo
        const allImages = data.map(item => item.img);

        // Har mobile ko ek random image assign karo
        const mobilesWithRandomImages = data.map(item => ({
          ...item,
          img: allImages[Math.floor(Math.random() * allImages.length)]
        }));

        setMobiles(mobilesWithRandomImages);
      });
  }, []);

  return (
    <div>
      <div className="mobile-cards">
        {mobiles.map((mobile) => (
          <div className="card" key={mobile.id}>
            <img
              src={mobile.img}
              alt={mobile.name}
              style={{ width: "100%", height: "250px", objectFit: "contain" }}
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

      <footer className="footer">
        <p>&copy; 2025 Mobile Store</p>
      </footer>
    </div>
  );
};

export default Mobile;
