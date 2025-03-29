import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout";
import Home from "./pages/Home";
import About from './pages/about';
import Mobile from './pages/mobile';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="mobile" element={<Mobile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
