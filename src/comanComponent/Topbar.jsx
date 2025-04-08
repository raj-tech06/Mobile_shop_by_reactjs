import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaShoppingCart, FaRegHeart } from 'react-icons/fa';
import { RiAdminFill } from 'react-icons/ri';
import { IoIosLogOut } from 'react-icons/io';
import { LuScanSearch } from 'react-icons/lu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useCart } from '../pages/CartContext'; 

const TopBar = () => {
  const { cartItems } = useCart(); 

  return (
    <div id="top-bar-wrapper" className="bg-dark text-white py-2">
      <Container className="d-flex justify-content-between align-items-center">
        <span className="font-weight-bold">ARS Mobile</span>

        <div className="search-container d-flex align-items-center">
          <input
            type="text"
            id="search-bar"
            className="form-control mr-2"
            placeholder="Search..."
          />
          <LuScanSearch id="search-icon" />
        </div>

        <div id="top-bar-links" className="d-flex align-items-center">
          <Link to="/cart" className="text-white mr-3 position-relative">
            <FaShoppingCart />
            {cartItems.length > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: '0.6rem' }}
              >
                {cartItems.length}
              </span>
            )}
          </Link>
          <Link to="/cart" className="text-white mr-3">
            <FaRegHeart />
          </Link>
          <Link to="/admin" className="text-white mr-3">
            <RiAdminFill />
          </Link>
          <Link to="/login" className="text-white mr-3">Login</Link>
          <Link to="/cart" className="text-white">
            Logout <IoIosLogOut />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
