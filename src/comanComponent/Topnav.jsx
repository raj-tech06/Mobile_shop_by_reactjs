import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar>
      <Nav id="Navbar1">
        
        <Nav.Link as={Link} to="Home" className="NavItem">Home</Nav.Link>
        <Nav.Link as={Link} to="about" className="NavItem">About</Nav.Link>
        <Nav.Link as={Link} to="mobile" className="NavItem">Mobile</Nav.Link>


        <NavDropdown title="Other Accessories" id="basic-nav-dropdown" className="NavItem">
          <NavDropdown.Item href="#smartwatch">Smart Watch</NavDropdown.Item>
          <NavDropdown.Item href="#charger">Charger</NavDropdown.Item>
          <NavDropdown.Item href="#bluetooth">Bluetooth</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
