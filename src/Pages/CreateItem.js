import React, { useState } from 'react';
import axios from 'axios';
import FormInput from '../components/FormInput';

const CreateItem = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://mockapi.io/endpoint/items', { name })
      .then(() => alert('Item created successfully!'))
      .catch(error => console.error('Error creating item:', error));
  };

  return (
    <div className="container">
      <h1>Create Item</h1>
      <form onSubmit={handleSubmit}>
        <FormInput label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit" className="btn btn-success">Create</button>
      </form>
    </div>
  );
};

export default CreateItem;

