// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ProductGrid from './layouts/ProductsGrid';
import StarTable from './layouts/StarTable';
import Navbar from './layouts/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductGrid />} />
        <Route path="/starred" element={<StarTable />} />
      </Routes>
    </Router>
  );
};

export default App;
