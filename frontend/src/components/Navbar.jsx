import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css';
const Navbar = () => {
  const isLoggedIn = localStorage.getItem('token');

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">FoodOrder</Link>
      </div>
      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        {isLoggedIn ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/cart">Cart</Link>
            <button onClick={() => {
              localStorage.removeItem('token');
              window.location.reload(); // This logs the user out by clearing the token
            }}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
