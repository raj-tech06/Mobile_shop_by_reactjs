import React from 'react';
import { Container } from 'react-bootstrap';
import { FaShoppingCart, FaRegHeart, FaUserPlus } from 'react-icons/fa';
import { IoIosLogOut, IoIosLogIn } from 'react-icons/io';
import { LuScanSearch } from 'react-icons/lu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate} from 'react-router-dom';
import { useCart } from '../pages/CartContext'; 








const TopBar = () => {
  const { cartItems } = useCart(); 



  const navigate1 = useNavigate(); 

  const handleLogin = () => {
    console.log('Redirecting to register page');
    
    navigate1('/register');
  };



// ------------------logout----------

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    console.log('user logout')
    alert('Logout successful!!')
    navigate('About');
  };


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
       
          <Link to="/register" className="text-white mr-3">
            <FaUserPlus />
          </Link> 

          <Link to="/login" className="text-white mr-3" onClick={handleLogin}>
            Login<IoIosLogIn />
          </Link>

          <Link to="/" className="text-white">

          <button onClick={handleLogout}>Logout</button><IoIosLogOut />

          
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
