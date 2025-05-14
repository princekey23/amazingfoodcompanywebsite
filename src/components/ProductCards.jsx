import React from "react";
import Pouch1 from "../images/pouch1.png";
import Pouch from "../images/pouch.png";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Amazing Family Porridge",
    description:
      "A nourishing blend of maize, wheat, sorghum, soya, sesame, groundnuts, finger millet, and rice for growing children and families.",
    image: require("../images/pouch1.png"), // Ensure the image is in the correct path
  },
  {
    id: 2,
    title: "Amazing Special Porridge",
    description:
      "A refined blend of sesame and soya, providing targeted wellness benefits for busy adults, especially women.",
    image: require("../images/pouch.png"), // Ensure the image path is correct
  },
];

const ProductCards = () => {
  return (
    <div className="container">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.title} className="card-image" />
          <div className="card-content">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <Link to="/products" className="btn">
              Learn More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
