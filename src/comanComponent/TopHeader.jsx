import React from 'react';

const TopBar = () => {
  return (
    <div id="top-bar">
      <div id="top-bar-content">
        <span>ARS Mobile</span>
    </div>
    
        <input type="text" id='search-bar'/>

        <div id="top-bar-links">
          <a href="/login">Login</a>
          <a href="/cart">Cart</a>
          <a href="/cart">Cart</a>
          <a href="/cart">Cart</a>
          <a href="/cart">Cart</a>

        </div>
    </div>
  );
};

export default TopBar;
