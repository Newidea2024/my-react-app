import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Home page
import CreateItem from './pages/CreateItem'; // Create Item page
import UpdateItem from './pages/UpdateItem'; // Update Item page
import CustomNavbar from './components/Navbar'; // Custom Navbar
import Footer from './components/Footer'; // Footer

function App() {
  return (
    <Router>
      {/* Navbar appears on all pages */}
      <CustomNavbar />
      
      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Root/home route */}
        <Route path="/create" element={<CreateItem />} /> {/* Create Item route */}
        <Route path="/update/:id" element={<UpdateItem />} /> {/* Update Item with dynamic id */}
      </Routes>

      {/* Footer appears on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
