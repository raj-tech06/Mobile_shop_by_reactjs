
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { message } from 'antd';
import { useCart } from '../pages/CartContext'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';

const Home = () => {
  const [mobiles, setMobiles] = useState([]);
  const { addToCart } = useCart(); 

  useEffect(() => {
    fetch("http://localhost:3000/mobiles")
      .then((response) => response.json())
      .then((data) => {
        const shuffled = data.sort(() => 0.5 - Math.random()); 
        setMobiles(shuffled.slice(0, 10));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container my-5">
        <Carousel>
         <Carousel.Item>
           <img className="d-block w-100" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684242615/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/Main%20Banner/D_main-banner_hat0zq.png?tr=w-2048" alt="First slide" />
         </Carousel.Item>
         <Carousel.Item>
           <img className="d-block w-100" src="https://www.top10mobileshop.com/images/top10mobiles.com/slider/811703943202503210933.jpg" alt="Second slide" />
         </Carousel.Item>
         <Carousel.Item>
           <img className="d-block w-100" src="https://www.top10mobileshop.com/images/top10mobiles.com/slider/620353825202503100645.jpg" alt="Third slide" />
         </Carousel.Item>
       </Carousel>

      <div className="row mt-5" style={{width:"100%", height:"auto"}}>
        {mobiles.map((mobile) => (
          <div className="col-md-4 mb-4" key={mobile.id}>
            <div className="card">
            <img src={mobile.img} alt={mobile.name} style={{ width: "100%", height: "250px", objectFit:"contain" }} />
            <div className="card-body text-center">
                <h5 className="card-title">{mobile.name}</h5>
                <p className="card-text">{mobile.brand}</p>
                <p className="card-text"><strong>{mobile.price}</strong></p>
                <button className="btn btn-primary" onClick={() => { 
                  addToCart(mobile);
                  message.success(`${mobile.name} added to cart!`);
                }}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
