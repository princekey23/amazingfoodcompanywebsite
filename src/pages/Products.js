import React from "react";
import { Link } from "react-router-dom";
import CerealImg from "../images/farmfresh.jpg";
import FAQs from "../components/Faqs";


function Products() {
  const products = [
  {
    id: 1,
    title: "Amazing Family Porridge",
    description:
      "A nourishing blend of maize, wheat, sorghum, soya, sesame, groundnuts, finger millet, and rice for growing children and families.",
    image: require("../images/pouch1.png"), // Ensure the image is in the correct path
    path:"/familyporridge",
  },
  {
    id: 2,
    title: "Amazing Special Porridge",
    description:
      "A refined blend of sesame and soya, providing targeted wellness benefits for busy adults, especially women.",
    image: require("../images/pouch.png"), // Ensure the image path is correct
    path: "/specialporridge",
  },
];
  return (
    <div className="Products-page">
      <section className="product-hero">
        <h1>Amazing Products</h1>
      </section>
      <section className="product-details">
        <div className="products-wrapper">
          <div className="prod-wrapper">
            <h1>Our Flagship Products</h1>
            <p>
              Give your child a Wholesome, Delicious, and Growth-Focused meal with our Amazing Family 
              Porridge and our simple Amazing Special Porridge, each created with their well-being 
              in mind
            </p>
          </div>
          <div className="container">
             {products.map((product) => (
              <div className="card" key={product.id}>
                <img src={product.image} alt={product.title} className="card-image" />
                <div className="card-content">
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <Link to={product.path} className="btn">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="products-teaser">
            <div className="teaser">
              <div className="teaser-lock">
                <h3> Children need meals that nourish their bodies and excite their taste buds. 
                  That’s why we’ve crafted a meal that’s:
                </h3>
                <ul className="teaser-list">
                    <li><i className="fas fa-thumbs-up"/> Kid-approved taste</li>
                    <li><i className="fas fa-thumbs-up"/> Rich in vitamins & minerals</li>
                    <li> <i className="fas fa-thumbs-up"/> Easy to prepare for busy families</li>
                </ul>
                <div className="teaser-cta">
                  <p>Experience the healthiest, happiest meal yet!</p>
                  <div className="discover">
                    <Link to="/contact">
                      discover how
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="teaser-container">
              <div className="teaser-cards">
                <div className="teaser-card">
                  <img src={CerealImg} alt="Parents"/>
                </div>
                <div className="teaser-card">
                  <h3>Why Parents Trust Us</h3>
                  <ul className="card-list">
                      <li>✔ Naturally sourced ingredients</li>
                      <li>✔ Simple, balanced nutrition</li>
                      <li>✔ Zero artificial additives</li>
                  </ul>
                  <small>
                    Learn more and order via the "Order" button (top right), or connect with us instantly on WhatsApp below
                  </small>
                  <div className="call">
                    <Link className="phone" to="tel:+254792498449" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-phone"/> Call Now
                    </Link>
                    <Link className="whatsapp" to="https://wa.me/254792498449" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-whatsapp"/> WhatsApp
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;