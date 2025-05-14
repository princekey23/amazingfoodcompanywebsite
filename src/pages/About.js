import React from "react";
import myVideo from "../images/videone.mp4";
import { Link } from "react-router-dom";

function About() {
  const products = [
    {
      id: 1,
      title: "Combating Malnutrition:",
      description:
        "Crafting nutrient-rich foods that directly address dietary deficiencies within the camp and beyond.",
      image: require("../images/nutrient.jpg"), // Ensure the image is in the correct path
    },
    {
      id: 2,
      title: "Empowering Communities:",
      description:
        "Equipping families with the tools for long-term nutritional and economic stability, starting with the unique needs of Kakuma",
      image: require("../images/comm.png"), // Ensure the image path is correct
    },
    {
      id: 3,
      title: "Operating Responsibly",
      description:
        "Utilizing carefully selected ingredients and sustainable production practices, mindful of the local context in Kakuma",
      image: require("../images/food.png"), // Ensure the image path is correct
    },
    {
      id: 4,
      title: "Championing Equity:",
      description:
        "Ensuring that access to vital nutrition is a right, not a privilege, beginning with the residents of Kakuma Refugee Camp",
      image: require("../images/equi.png"), // Ensure the image path is correct
    },
  ];
  const sections = {
      id: 1,
      title: "Our Purpose: Nourishing Potential, Cultivating Change",
      description:
        "At Amazing Food Company, based in Kakuma Refugee Camp, we believe nutrition is essential to individual and community well-being. Food is more than sustenance—it empowers, builds resilience, and drives lasting change. We’re committed to fighting malnutrition, uplifting families, and creating accessible, nutritious meals that support healthier futures",
      image: require("../images/ten.jpg"), // Ensure the image is in the correct path
    };

    const visions =
      {
      id: 1,
      title: "Our Vision: A Future Where Nutrition Empowers All",
      description: "We envision a world free from hunger, where every family can access the nourishment they need to thrive. Operating from Kakuma, we promote sustainability, community empowerment, and collaboration—working toward a future where every meal strengthens lives and inspires global food security",
      image: require("../images/two.jpg"),
    };
    const missions =
    {
      id: 1,
      title: "Our Commitment: Investing in a Healthier Tomorrow, Starting in Kakuma",
      description: "Amazing Food Company is a mission-driven social enterprise rooted in Kakuma. Through nutrition, we invest in long-term community health and resilience. Join us in creating meaningful, lasting impact—one nourishing meal at a time",
      image: require("../images/nutrient.jpg"),
      anchor: "Click to the link below to get in touch with us"
    };
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-wrapper">
          <div className="wrap">
            <h1>About Us - Amazing Food Company</h1>
          </div>
        </div>
      </section>
      <section className="about-mission">
        <div className="m-headers">
          <h2>
            Our Mission: Delivering Nourishment, Driving Sustainable Impact in Kakuma and Beyond
          </h2>
          <p> 
            Our mission is to ensure that every child, regardless of circumstance, 
            has access to the nourishment essential for healthy growth and development. 
            Rooted in Kakuma Refugee Camp, we are dedicated to creating and delivering 
            highly nutritious and affordable meal solutions, particularly for vulnerable 
            children and empowering women as key caregivers within this community. 
            Our commitment extends beyond Kakuma as we aim to:
          </p>
        </div>
        <div className="mission-container">
          <div className="mis-container">
          {products.map((product) => (
            <div className="m-iscard" key={product.id}>
              <img src={product.image} alt={product.title} className="mis-image" />
              <div className="card-content">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
      <section className="mission">
        <div className="m-grid" key={sections.id}>
          <img src={sections.image} alt={sections.title} className="m-image" />
          <div className="m-content">
            <h2>{sections.title}</h2>
            <p>{sections.description}</p>
          </div>
        </div>
      </section>
      <section className="vision">
        <div className="m-grid" key={visions.id}>
          <div className="v-content">
            <h2>{visions.title}</h2>
            <p>{visions.description}</p>
          </div>
          <img src={visions.image} alt={visions.title} className="card-image" />
        </div>
      </section>
      <section className="commit">
        <div className="m-flex" key={missions.id}>
          <div className="c-content">
            <div className="c-wrapper">
              <h2>{missions.title}</h2>
              <p>{missions.description}</p>
            </div>
            <div className="anchor">
              <small>{missions.anchor}</small>
              <Link to="/contact">
                contact us <i className="fab fa-telegram"/>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;