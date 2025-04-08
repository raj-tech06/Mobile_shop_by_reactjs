
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './pages/CartContext'; 
import Layout from "./layout";
import Home from "./pages/Home";
import About from './pages/about';
import Mobile from './pages/mobile';
import AddCartPage from './pages/AddcardPage';

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
          <Route path='cart' element={<AddCartPage />}/>
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
