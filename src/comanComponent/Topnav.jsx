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
      <Navbar bg="dark" variant="dark" expand="lg" className="py-0" id="navcolor">
        <Container>
          <Navbar.Brand as={Link} to="/">BrandName</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/" className="NavItem">All</Nav.Link>
              <Nav.Link as={Link} to="/Accessories" className="NavItem">Accessories</Nav.Link>
              <Nav.Link as={Link} to="/mobile" className="NavItem">Mobiles</Nav.Link>
              {/* <Nav.Link as={Link} to="/" className="NavItem">i don't</Nav.Link> */}
              {/* <Nav.Link as={Link} to="/about" className="NavItem">About</Nav.Link>
              <Nav.Link as={Link} to="/mobile" className="NavItem">Mobile</Nav.Link> */}

          <NavDropdown title="Brands" id="basic-nav-dropdown" className="NavItem">
            <NavDropdown.Item as={Link} to="#smartwatch">Xiomi</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="#charger">Samsung</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="#bluetooth">Vivo</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="#smartwatch">Realme</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="#charger">Oppo</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="#bluetooth">Apple</NavDropdown.Item>          
          </NavDropdown>

              <Nav.Link as={Link} to="/about" className="NavItem">About</Nav.Link>
              <Nav.Link as={Link} to="/customer-service" className="NavItem">Customer Service</Nav.Link>                        

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


