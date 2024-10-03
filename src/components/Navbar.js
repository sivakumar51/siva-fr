import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faStore, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ searchTerm, handleSearch, cartItems }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="nav-link">
          Fomers Cart
        </Link>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
        <Link to="/" className="nav-link">
          <FontAwesomeIcon icon={faUser} /> Login
        </Link>
        <Link to="/" className="nav-link">
          <FontAwesomeIcon icon={faStore} /> Become a Seller
        </Link>

        <Link to="/cart" className="nav-link cart-link">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="cart-text">Cart</span>
          {cartItems > 0 && (
            <span className="cart-count">{cartItems}</span> 
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
