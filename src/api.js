import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com'; // Replace with your API URL

export const fetchItems = () => axios.get(`${API_URL}/items`);
export const fetchItemById = (id) => axios.get(`${API_URL}/items/${id}`);
export const createItem = (item) => axios.post(`${API_URL}/items`, item);
export const updateItem = (id, item) => axios.put(`${API_URL}/items/${id}`, item);
export const deleteItem = (id) => axios.delete(`${API_URL}/items/${id}`);
