import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">YAZH</div>

    {/* Icons */}
      <div className="header-search">
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
        />
        </div>

      {/* Navigation */}
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/categories">Categories</a>
        <a href="/profile">Profile</a>
      </nav>

      {/* Icons */}
      <div className="header-icons">
        <a href="/cart" className="cart-icon">🛒 Cart</a>
      </div>
    </header>
  );
};

export default Header;
