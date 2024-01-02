import React, { useState, useEffect } from 'react';

const StarTable = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/stars')
      .then(response => response.json())
      .then(data => setStars(data))
      .catch(error => console.error('Error fetching stars:', error));
  }, []);

  return (
    <div>
      <h2>Stars Table</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Stars</th>
          </tr>
        </thead>
        <tbody>
          {stars.map(star => (
            <tr key={star.id}>
              <td>{star.product.name}</td>
              <td>{star.user.name}</td>
              <td>{star.user.email}</td>
              <td>{star.stars}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StarTable;
