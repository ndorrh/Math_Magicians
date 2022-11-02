import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar">
    <h1>Math Magicians</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li className="cal"><Link to="/Calculator">Calculator</Link></li>
      <li><Link to="/about">Quote</Link></li>
    </ul>
  </nav>
);

export default Header;
