import React from 'react';

const Cart = ({ cart, increaseQuantity, decreaseQuantity, removeFromCart, placeOrder }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty!</p> : (
        <div>
          {cart.map(item => (
            <div key={item._id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} />
              <h2>{item.name}</h2>
              <p>${item.price}</p>
              <div>
                <button onClick={() => decreaseQuantity(item._id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item._id)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item._id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${total}</h3>
          <button onClick={placeOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
