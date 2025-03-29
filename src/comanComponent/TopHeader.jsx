
import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaShoppingCart, FaRegHeart } from 'react-icons/fa';
import { RiAdminFill } from 'react-icons/ri';
import { IoIosLogOut } from 'react-icons/io';
import { LuScanSearch } from 'react-icons/lu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const TopBar = () => {
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
          <LuScanSearch id="search-icon"/>
        </div>

        <div id="top-bar-links" className="d-flex align-items-center">
          <a href="/cart" className="text-white mr-3">
            <FaShoppingCart />
          </a>
          <a href="/cart" className="text-white mr-3">
            <FaRegHeart />
          </a>
          <a href="/admin" className="text-white mr-3">
            <RiAdminFill />
          </a>
          <a href="/login" className="text-white mr-3">Login</a>
          <a href="/cart" className="text-white">
            Logout <IoIosLogOut />
          </a>
        </div>
      </Container>
    </div>
  );
};

const NavBar = () => {
  return (
    <>
      <TopBar /> 
      <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
        <Container>
          <Navbar.Brand as={Link} to="/">BrandName</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/" className="NavItem">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="NavItem">About</Nav.Link>
              <Nav.Link as={Link} to="/mobile" className="NavItem">Mobile</Nav.Link>

              <NavDropdown title="Other Accessories" id="basic-nav-dropdown" className="NavItem">
                <NavDropdown.Item as={Link} to="#smartwatch">Smart Watch</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#charger">Charger</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#bluetooth">Bluetooth</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
