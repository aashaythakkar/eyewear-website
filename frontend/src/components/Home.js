// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Custom styles for this component

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold">Discover Your Perfect Eyewear</h1>
          <p className="lead mt-3">
            Browse through our wide range of stylish, modern, and comfortable eyewear
          </p>
          <Link to="/products" className="btn btn-dark btn-lg mt-4">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="highlights-section py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Our Featured Collections</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="../images/aviator.jpg"
                  className="card-img-top"
                  alt="Aviator Glasses"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Aviator Glasses</h5>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src= "../images/round-frame.jpg"
                  className="card-img-top"
                  alt="Round Frame Glasses"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Round Frame Glasses</h5>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="../images/cat-eye.jpg"
                  className="card-img-top"
                  alt="Cat Eye Glasses"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Cat Eye Glasses</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
