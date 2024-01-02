// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ProductGrid from './layouts/ProductsGrid';
import StarTable from './layouts/StarTable';

const App = () => {
  return (
    <Router>
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
      <Routes>
        <Route path="/" element={<ProductGrid />} />
        <Route path="/starred" element={<StarTable />} />
      </Routes>
    </Router>
  );
};

export default App;
