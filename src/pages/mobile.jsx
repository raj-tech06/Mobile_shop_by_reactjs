

// // import React, { useEffect, useState } from 'react';

// // const Mobile = () => {
// //   const [mobiles, setMobiles] = useState([]);

// //   // Fetch the data from the JSON Server
// //   useEffect(() => {
// //     fetch('http://localhost:3000/mobiles')
// //       .then(response => response.json())
// //       .then(data => setMobiles(data));
// //   }, []);

// //   return (
// //     <div>
// //       {/* Mobile Cards Grid */}
// //       <div className="mobile-cards">
// //         {mobiles.map((mobile) => (
// //           <div className="card" key={mobile.id}>
// //             <img 
// //               src={mobile.img} 
// //               alt={mobile.name} 
// //               className="card-img" 
// //               style={{ width: '100%', height: 'auto' }} 
// //             />
// //             <h3>{mobile.name}</h3>
// //             <p>{mobile.brand}</p>
// //             <p>{mobile.price}</p>
// //           </div>
// //         ))}
// //       </div>

    
// //       {/* Footer */}
// //       <footer className="footer">
// //         <p>&copy; 2025 Mobile Store</p>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default Mobile;
// import React, { useEffect, useState } from 'react';
// import { message } from 'antd';
// import { useCart } from '../pages/CartContext'; // Cart Context को Import किया
// import 'antd/dist/reset.css';

// const Mobile = () => {
//   const [mobiles, setMobiles] = useState([]);
//   const { cart, setCart } = useCart(); // Cart State को Access किया

//   // Fetch Data from JSON Server
//   useEffect(() => {
//     fetch('http://localhost:3000/mobiles')
//       .then(response => response.json())
//       .then(data => setMobiles(data));
//   }, []);

//   // Add to Cart Function
//   const addToCart = (mobile) => {
//     const updatedCart = cart.map((item) =>
//       item.id === mobile.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
//     );

//     if (!cart.find((item) => item.id === mobile.id)) {
//       updatedCart.push({ ...mobile, quantity: 1 });
//     }

//     setCart(updatedCart);
//     message.success(`${mobile.name} added to cart!`);
//   };

//   return (
//     <div>
//       {/* Mobile Cards Grid */}
//       <div className="mobile-cards">
//         {mobiles.map((mobile) => (
//           <div className="card" key={mobile.id}>
//             <img 
//               src={mobile.img} 
//               alt={mobile.name} 
//               className="card-img" 
//               style={{ width: '100%', height: 'auto' }} 
//             />
//             <h3>{mobile.name}</h3>
//             <p>{mobile.brand}</p>
//             <p>{mobile.price}</p>
//             <button className="btn btn-primary" onClick={() => addToCart(mobile)}>
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
      
//       {/* Footer */}
//       <footer className="footer">
//         <p>&copy; 2025 Mobile Store</p>
//       </footer>
//     </div>
//   );
// };

// export default Mobile;

import React, { useEffect, useState } from 'react';
import { useCart } from '../pages/CartContext'; // ✅ Correct Import
import { message } from 'antd';

const Mobile = () => {
  const [mobiles, setMobiles] = useState([]);
  const { addToCart } = useCart(); // ✅ useCart Hook से addToCart लाओ

  useEffect(() => {
    fetch('http://localhost:3000/mobiles')
      .then(response => response.json())
      .then(data => setMobiles(data));
  }, []);

  return (
    <div>
      <div className="mobile-cards">
        {mobiles.map((mobile) => (
          <div className="card" key={mobile.id}>
            <img src={mobile.img} alt={mobile.name} className="card-img" style={{ width: '100%', height: 'auto' }} />
            <h3>{mobile.name}</h3>
            <p>{mobile.brand}</p>
            <p>{mobile.price}</p>
            <button className="btn btn-primary" onClick={() => { 
              addToCart(mobile);
              message.success(`${mobile.name} added to cart!`);
            }}>
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

