
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './pages/CartContext'; 
import Layout from "./layout";
import Home from "./pages/Home";
import About from './pages/about';
import Mobile from './pages/mobile';
import AddCartPage from './pages/AddcardPage';
import AccessoriesPage from './pages/Accessories';
import CustomerServicePage from './pages/CustomerService';
import Register from './pages/register';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>

        
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Home />} /> 
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="mobile" element={<Mobile />} />
          <Route path='accessories' element={<AccessoriesPage />}/>.
          <Route path='customer-service' element={<CustomerServicePage />}/>
          <Route path='cart' element={<AddCartPage />}/>

          <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
          



          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>

    
  );
}

export default App;
