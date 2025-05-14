import React from "react";
import { Link } from "react-router-dom";
import FamilyImg from "../images/pouch1.png"

const FamilyPorridge = () => {
  return (
    <div className="product-page">
      <img src={FamilyImg} alt="Amazing Family Porridge" className="product-image" />
      <div className="product-content">
        <h1>Amazing Family Porridge</h1>
        <p>
          Packed with essential grains, proteins, and minerals, this porridge supports healthy development and sustained energy.
          Perfect for children and families, every spoonful fuels growth, strengthens immunity, and keeps little ones active and happy.
        </p>
        <h2>Key Benefits:</h2>
        <ul>
          <li>Rich in plant-based protein from soya and groundnuts</li>
          <li>Energy-boosting whole grains from maize, wheat, sorghum, rice, and finger millet</li>
          <li>Essential minerals for bone strength, including calcium and iron from sesame and finger millet</li>
        </ul>
      </div>
      <div className="redirect-link">
        <small>Return to products page</small>
        <Link className="redirect" to="/products">Back Now <i className="fa-solid fa-circle-arrow-left"/></Link>
      </div>
    </div>
  );
};

export default FamilyPorridge;
