// src/components/Products.js
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import './Products.css';

const productData = [
  { id: 1, name: 'Aviator Glasses', price: 2000, image: '/images/aviator.jpg' },
  { id: 2, name: 'Round Frame Glasses', price: 1500, image: '/images/round-frame.jpg' },
  { id: 3, name: 'Cat Eye Glasses', price: 2500, image: '/images/cat-eye.jpg' },
];

function Products() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div id="products" className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Our Stylish Collection</h2>
      <div className="row">
        {productData.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm rounded product-card">
              <img
                src={product.image}
                className="card-img-top rounded-top"
                alt={product.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title text-dark">{product.name}</h5>
                <p className="card-text text-muted">Price: ₹{product.price}</p>
                <button
                  className="btn btn-outline-primary mt-2"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-success btn-lg" onClick={() => navigate('/cart')}>
          View Cart
        </button>
      </div>
    </div>
  );
}

export default Products;
