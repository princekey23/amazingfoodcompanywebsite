import React from "react";
import {Link } from 'react-router-dom'
import SpecialImg from "../images/pouch.png"

const SpecialPorridge = () => {
  return (
    <div className="product-page">
      <img src={SpecialImg} alt="Amazing Special Porridge" className="product-image" />
      <div className="product-content">
        <h1>Amazing Special Porridge</h1>
        <p>
          Carefully blended with sesame and soya, this nutrient-rich porridge is tailored for energy, muscle recovery, and hormonal balance.
          Light yet fulfilling, it’s the perfect choice for those who need a wholesome start to the day without compromise.
        </p>
        <h2>Key Benefits:</h2>
        <ul>
          <li>Plant-based protein for strength and repair</li>
          <li>Rich in calcium and magnesium for bone and heart health</li>
          <li>Gentle, easily digestible, and perfectly balanced</li>
        </ul>
      </div>
      <div className="redirect-link">
        <small>Return to products page</small>
        <Link className="redirect" to="/products">Back Now <i className="fa-solid fa-circle-arrow-left"/></Link>
      </div>
    </div>
  );
};

export default SpecialPorridge;
