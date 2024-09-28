import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Importing Axios

const UpdateItem = () => {
  const { id } = useParams();  // Fetch the ID from the URL
  const [name, setName] = useState('');  // State to store the item name
  const [loading, setLoading] = useState(true);  // Loading state for fetch
  const [error, setError] = useState(null);  // Error state for any issues

  // Fetch the item data when the component loads
  useEffect(() => {
    axios.get(`https://your-mockapi-endpoint.com/items/${id}`)
      .then((response) => {
        setName(response.data.name);
        setLoading(false);  // Set loading to false once data is fetched
      })
      .catch((error) => {
        setError('Failed to fetch the item.');
        setLoading(false);  // Set loading to false even if there is an error
      });
  }, [id]);

  // Handle the form submission to update the item
  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://your-mockapi-endpoint.com/items/${id}`, { name })
      .then(() => {
        alert('Item updated successfully!');
      })
      .catch((error) => {
        setError('Failed to update the item.');
        console.error(error);
      });
  };

  // Display loading state, error message, or the form
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Update Item</h1>
      <form onSubmit={handleUpdate}>
        <label htmlFor="name">Item Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}  // Update the name as the user types
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateItem;

