import React from 'react';
import './Cart.css'; 

const Cart = ({ cartItems, updateCart, removeFromCart }) => {
  const handleQuantityChange = (product, delta) => {
    const newQuantity = Math.max(product.quantity + delta, 0);
    if (newQuantity > 0) {
      updateCart({ ...product, quantity: newQuantity });
    } else {
      removeFromCart(product.id);
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  


  return (
    <div className='your-cart-title'><h1>Your Cart</h1>
    <div className="cart-container">
    
      {cartItems.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <div>{item.name} </div>
                <div><p>Quantity:{item.quantity}</p> </div>
                <div><p>Seller:{item.Seller}</p> </div>
                <div><p>Description:{item.Description}</p></div>
                <div>
                  <button onClick={() => handleQuantityChange(item, -1)}>-</button>
                  {item.quantity}
                  <button onClick={() => handleQuantityChange(item, 1)}>+</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h2 className="total-price">Total Price: ₹ {calculateTotalPrice().toFixed(2)}</h2>
    </div>
    </div>
  );
};

export default Cart;
