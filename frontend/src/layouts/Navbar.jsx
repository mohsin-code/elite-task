import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white">
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/starred">Starred Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
