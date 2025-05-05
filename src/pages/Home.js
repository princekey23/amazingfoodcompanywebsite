import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Community from "../images/carousel1.jpg";
import ChildrenIMG from "../images/carousel3.jpg";
import Empower from "../images/carousel2.jpg";
import EmpowerCom from "../images/nine.jpg"

function Home() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="home-page">
      {/* Image Carousel */}
      <section class="image-carousel">
        <Slider {...carouselSettings}>
          {/*<!-- Slide 1: Mission --> */}
          <div class="carousel-slide">
            <img src={ChildrenIMG} alt="Mission" />
            <div class="carousel-text">
              <h2>Our Mission: Nourishing Lives, Strengthening Communities</h2>
              <p>Providing high-quality, nutritious meals that empower families and support growing children.</p>
            </div>
          </div>

          {/*-- Slide 2: Commitment --*/}
          <div class="carousel-slide">
            <img src={Empower} alt="Commitment Image" />
            <div class="carousel-text">
              <h2>Our Commitment: Sustainability & Empowerment</h2>
              <p>Championing sustainable food practices while uplifting caregivers and communities.</p>
            </div>
          </div>

          {/*<!-- Slide 3: Impact --> */}
          <div class="carousel-slide">
            <img src={Community}  alt="Impact Image" />
            <div class="carousel-text">
              <h2>Our Impact: Feeding Families, Protecting the Planet</h2>
              <p>Reducing food waste, ensuring accessibility to nutrition, and supporting future generations.</p>
            </div>
          </div>
        </Slider>
      </section>
      {/* Hero Section */}
      <section className="home-header">
        <article className="header-grid">
          <div className="header-grids">
            <h1>Nourishing Lives, Strengthening Communities</h1>
            <p>
              At <strong>Amazing Food Company</strong>, we believe food is more than just sustenance—it’s an opportunity to empower families, protect the environment, and create lasting change.
            </p>
            <button className="cta-button">
              <Link to="/about" style={{ textDecoration: "none", color: "white" }}>Learn More</Link>
            </button>
          </div>
          <div className="header-grids">
            <img className="grid-image" src={EmpowerCom} alt="Community involvement"/>
          </div>
        </article>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>Our Commitment to Nutrition and Impact</h2>
        <p>We started with one goal: to ensure every child receives the nourishment they deserve while helping families thrive.</p>
        <ul>
          <li>✔ <strong>Women’s Empowerment</strong> – Supporting caregivers in building sustainable futures.</li>
          <li>✔ <strong>Environmental Care</strong> – Reducing food waste while providing high-quality meals.</li>
          <li>✔ <strong>Child Health</strong> – Tackling hunger and malnutrition, one meal at a time.</li>
        </ul>
      </section>

      {/* Product Showcase */}
      <section className="featured-product">
        <h2>Better Ingredients for a Better Future</h2>
        <p>🌍 <strong>Sustainably sourced</strong></p>
        <p>🥣 <strong>Nutritious and easy-to-prepare meals</strong></p>
        <p>🤝 <strong>Every purchase helps build stronger families</strong></p>
        <img src="https://via.placeholder.com/300x150" alt="Product Packaging"/>
        <button className="cta-button">
          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>Discover More</Link>
        </button>
      </section>
    </div>
  );
}

export default Home;