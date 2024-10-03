import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import ImageSlider from './ImageSlider/ImageSlider'; 
import Footer from './Footer/Footer';
import Footersocial from './Footer/Foodersocial';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
      ));
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const updateCart = (updatedProduct) => {
    setCartItems(cartItems.map(item =>
      item.id === updatedProduct.id ? updatedProduct : item
    ));
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };


  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <Navbar searchTerm={searchTerm} handleSearch={handleSearch} />
      
      {/* Render home page */}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <ImageSlider />  
              <ProductList searchTerm={searchTerm} addToCart={addToCart} />
            </>
          } 
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} updateCart={updateCart} removeFromCart={removeFromCart} />} />
      </Routes>
      <Footer/>
      <Footersocial/>
    </Router>
  );
};

export default App;
