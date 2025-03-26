import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="container my-5">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.top10mobileshop.com/images/top10mobiles.com/slider/811703943202503210933.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.top10mobileshop.com/images/top10mobiles.com/slider/620353825202503100645.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.top10mobileshop.com/images/top10mobiles.com/slider/697649295202503031324.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
