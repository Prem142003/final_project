import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <h2>Admin Dashboard</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Manage Users</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
