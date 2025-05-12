
// import React from 'react';
// import { useCart } from '../pages/CartContext';
// import { message } from 'antd';

// import img1 from "../images/ear1.jpg";
// import img2 from "../images/ear2.jpg";
// import img3 from "../images/ear3.jpg";


// function AccessoriesPage() {
//   const { addToCart } = useCart();

//   const accessories = [
//     {
//       id: 1,
//       name: "Bass Boost Earbuds",
//       brand: "SoundPro",
//       price: "₹999",
//       img: img1
//     },
//     {
//       id: 2,
//       name: "Wireless Pods",
//       brand: "TuneMax",
//       price: "₹1,499",
//       img: img2
//     },
//     {
//       id: 3,
//       name: "Gaming Headset",
//       brand: "HyperX",
//       price: "₹2,199",
//       img: img3
//     },
//     {
//       id: 1,
//       name: "Bass Boost Earbuds",
//       brand: "SoundPro",
//       price: "₹999",
//       img: img1
//     },
//     {
//       id: 2,
//       name: "Wireless Pods",
//       brand: "TuneMax",
//       price: "₹1,499",
//       img: img2
//     },
//     {
//       id: 3,
//       name: "Gaming Headset",
//       brand: "HyperX",
//       price: "₹2,199",
//       img: img3
//     }              
//   ];

//   return (
//     <div>
//       <div className="mobile-cards">
//         {accessories.map((item) => (
//           <div className="card" key={item.id}>
//             <img
//               src={item.img}
//               alt={item.name}
//               style={{ width: "100%", height: "250px", objectFit: "contain" }}
//             />
//             <h3>{item.name}</h3>
//             <p>{item.brand}</p>
//             <p>{item.price}</p>
//             <button
//               className="btn btn-primary"
//               onClick={() => {
//                 addToCart(item);
//                 message.success(`${item.name} added to cart!`);
//               }}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       <footer className="footer">
//         <p>&copy; 2025 Mobile Store</p>
//       </footer>
//     </div>
//   );
// }

// export default AccessoriesPage;

// import React, { useEffect, useState } from 'react';
// import { useCart } from '../pages/CartContext';
// import { message } from 'antd';

// function AccessoriesPage() {
//   const { addToCart } = useCart();
//   const [mobiles, setMobiles] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3000/mobiles')
//       .then(response => response.json())
//       .then(data => {
//         // Filter only Samsung brand mobiles
//         const samsungMobiles = data.filter(item => item.brand.toLowerCase() === 'soundPro');
//         setMobiles(samsungMobiles);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <div className="mobile-cards">
//         {mobiles.map((item) => (
//           <div className="card" key={item.id}>
//             <img
//               src={item.img}
//               alt={item.name}
//               style={{ width: "100%", height: "250px", objectFit: "contain" }}
//             />
//             <h3>{item.name}</h3>
//             <p>{item.brand}</p>
//             <p>{item.price}</p>
//             <button
//               className="btn btn-primary"
//               onClick={() => {
//                 addToCart(item);
//                 message.success(`${item.name} added to cart!`);
//               }}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       <footer className="footer">
//         <p>&copy; 2025 Mobile Store</p>
//       </footer>
//     </div>
//   );
// }

// export default AccessoriesPage;



// // ============
// import React, { useEffect, useState } from 'react';
// import { useCart } from '../pages/CartContext';
// import { message } from 'antd';

// function AccessoriesPage() {
//   const { addToCart } = useCart();
//   const [accessories, setAccessories] = useState([]);

//   useEffect(() => {
//     const fetchAccessories = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/mobiles');
//         const data = await response.json();

//         const accessoryBrands = [
//           'SoundPro','TuneMax','HyperX','BeatBox','AudioBlast','Boult','TuneElite','BoomAudio','RhythmX','SonicBeat'];
        
//         const filtered = data.filter(item => accessoryBrands.includes(item.brand));

//         setAccessories(filtered);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchAccessories();
//   }, []);

//   return (
//     <div>
//       <div className="mobile-cards">
//         {accessories.map((item) => (
//           <div className="card" key={item.id}>
//             <img
//               src={item.img}
//               alt={item.name}
//               style={{ width: "100%", height: "250px", objectFit: "contain" }}
//             />
//             <h3>{item.name}</h3>
//             <p>{item.brand}</p>
//             <p>{item.price}</p>
//             <button
//               className="btn btn-primary"
//               onClick={() => {
//                 addToCart(item);
//                 message.success(`${item.name} added to cart!`);
//               }}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       <footer className="footer">
//         <p>&copy; 2025 Mobile Store</p>
//       </footer>
//     </div>
//   );
// }

// export default AccessoriesPage;
import React, { useEffect, useState } from 'react';
import { useCart } from '../pages/CartContext';
import { message } from 'antd';

// 📥 Local Images Import
import img1 from '../images/ear1.jpg';
import img2 from '../images/ear2.jpg';
import img3 from '../images/ear3.jpg';
import img4 from '../images/ear1.jpg';
import img5 from '../images/ear1.jpg';
import img6 from '../images/ear1.jpg';
import img7 from '../images/ear1.jpg';
import img8 from '../images/ear1.jpg';
import img9 from '../images/ear1.jpg';
import img10 from '../images/ear1.jpg';

// 🎨 Mapping local image names with imported files
const localImages = { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 };

// 🌀 Shuffle utility
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function AccessoriesPage() {
  const { addToCart } = useCart();
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await fetch('http://localhost:3000/mobiles');
        const data = await response.json();

        const accessoryBrands = [
          'SoundPro', 'TuneMax', 'HyperX', 'BeatBox', 'AudioBlast',
          'Boult', 'TuneElite', 'BoomAudio', 'RhythmX', 'SonicBeat'
        ];

        const filtered = data.filter(item => accessoryBrands.includes(item.brand));

        const shuffledAccessories = shuffleArray(filtered); // ✅ Random order
        setAccessories(shuffledAccessories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAccessories();
  }, []);

  return (
    <div>
      <div className="mobile-cards" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {accessories.map((item) => (
          <div className="card" key={item.id} style={{ width: '250px', padding: '10px', border: '1px solid #ccc' }}>
            <img
              src={item.img.startsWith('http') ? item.img : localImages[item.img]}
              alt={item.name}
              style={{ width: "100%", height: "250px", objectFit: "contain" }}
            />
            <h3>{item.name}</h3>
            <p>{item.brand}</p>
            <p>{item.price}</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                addToCart(item);
                message.success(`${item.name} added to cart!`);
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
}

export default AccessoriesPage;
