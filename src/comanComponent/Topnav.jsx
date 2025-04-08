// // import React from 'react';
// // import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import { Link } from 'react-router-dom';

// const NavBar = () => {
//   return (
//     <h1 aline="center">hellow</h1>
    
//     // <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
//     //   <Container>
//     //     <Navbar.Brand as={Link} to="/">BrandName</Navbar.Brand>
//     //     <Navbar.Toggle aria-controls="navbar-nav" />
//     //     <Navbar.Collapse id="navbar-nav">
//     //       <Nav className="ml-auto">
//     //         <Nav.Link as={Link} to="/" className="NavItem">Home</Nav.Link>
//     //         <Nav.Link as={Link} to="/about" className="NavItem">About</Nav.Link>
//     //         <Nav.Link as={Link} to="/mobile" className="NavItem">Mobile</Nav.Link>

//     //         <NavDropdown title="Other Accessories" id="basic-nav-dropdown" className="NavItem">
//     //           <NavDropdown.Item as={Link} to="#smartwatch">Smart Watch</NavDropdown.Item>
//     //           <NavDropdown.Item as={Link} to="#charger">Charger</NavDropdown.Item>
//     //           <NavDropdown.Item as={Link} to="#bluetooth">Bluetooth</NavDropdown.Item>
//     //         </NavDropdown>
//     //       </Nav>
//     //     </Navbar.Collapse>
//     //   </Container>
//     // </Navbar>
//   );
// }

// export default NavBar;




import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <>
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


