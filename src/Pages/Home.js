import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemList from '../components/ItemList';

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://mockapi.io/endpoint/items')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <h1>Items List</h1>
      <ItemList items={items} />
    </div>
  );
};

export default Home;

