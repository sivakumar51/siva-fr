import React, { useState } from 'react';

const Product = ({ product, addToCart, removeFromCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
    addToCart(product);
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      removeFromCart(product);
    }
  };

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price:  ₹{product.price}</p>
      <div>
        <button onClick={handleRemove}>-</button>
        <span>{quantity}</span>
        <button onClick={handleAdd}>+</button>
      </div>
    </div>
  );
};

export default Product;
