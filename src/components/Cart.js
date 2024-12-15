// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import './Cart.css';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div id="cart" className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="alert alert-info text-center">
          Your cart is empty.
        </div>
      ) : (
        <table className="table table-hover cart-table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
                <td>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Cart;
