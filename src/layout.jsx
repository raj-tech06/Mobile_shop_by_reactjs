import { Outlet } from "react-router-dom";
import NavBar from "./comanComponent/Topnav";
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopBar from "./comanComponent/Topbar";


const Layout=()=>{
    return(
        <>
        <TopBar />
        <NavBar />
        
        
        <Outlet />

    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={3} sm={6}>
            <h5>Product Categories</h5>
            <ul className="list-unstyled">
              <li>Smartphones</li>
              <li>Laptops</li>
              <li>DSLR Cameras</li>
              <li>Televisions</li>
              <li>Air Conditioners</li>
              <li>Refrigerator</li>
              <li>Kitchen Appliances</li>
              <li>Accessories</li>
              <li>Personal Care & Grooming</li>
            </ul>
          </Col>

          <Col md={3} sm={6}>
            <h5>Site Info</h5>
            <ul className="list-unstyled">
              <li>About Reliance Digital</li>
              <li>resQ Services</li>
              <li>Site Map</li>
              <li>Gift Cards</li>
              <li>Corporate Enquiries</li>
              <li>Contact Us</li>
              <li>Resource Center</li>
              <li>Buying Guides</li>
              <li>Manuals</li>
              <li>How To's</li>
              <li>Compare Products</li>
              <li>Nearest Store</li>
            </ul>
          </Col>

          <Col md={3} sm={6}>
            <h5>Policies</h5>
            <ul className="list-unstyled">
              <li>Terms of Use</li>
              <li>FAQs</li>
              <li>Cancellation and Returns Policy</li>
              <li>Pricing & Payments Policy</li>
              <li>Privacy Policy</li>
              <li>E-waste Recycling Policy</li>
              <li>EMI and Additional Cashback T&C</li>
              <li>RelianceOne Loyalty Program T&C</li>
              <li>Caution Notice</li>
            </ul>
          </Col>

          <Col md={3} sm={6}>
            <h5>Experience Reliance Digital App</h5>
         

            <h5>Follow Us</h5>
            <div className="d-flex">
              <a href="https://facebook.com" className="text-white mr-3">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-white mr-3">
                <FaTwitter size={20} />
              </a>
              <a href="https://youtube.com" className="text-white">
                <FaYoutube size={20} />
              </a>
            </div>

            <p className="mt-4">
              <small>
                Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.
              </small>
            </p>
          </Col>
        </Row>

        <Row>
          <Col className="text-center mt-4">
            <p>
              <small>© 2025 Reliance Digital. All rights reserved.</small>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
        </>
    )
}
export default Layout;