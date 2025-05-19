import React from "react";
//import myVid from "../images/five.jpg";
import { Link } from "react-router-dom";

function About() {
  const products = [
    {
      id: 1,
      title: "Addressing Nutritional Gaps:",
      description:
        "We aim to significantly reduce malnutrition and micronutrient deficiencies among refugees through our fortified porridge flours.",
      image: require("../images/nutrient.jpg"), // Ensure the image is in the correct path
    },
    {
      id: 2,
      title: "Empowering Women and Children:  ",
      description:
        "Our products are specifically formulated to meet the unique dietary needs of women and children, promoting better health and development.",
      image: require("../images/comm.png"), // Ensure the image path is correct
    },
    {
      id: 3,
      title: "Enhancing Production Capacity:",
      description:
        "Seeking funds for better equipment and supplies will enhance our production capacity to meet growing demand in Kakuma and potentially beyond.",
      image: require("../images/food.png"), // Ensure the image path is correct
    },
    {
      id: 4,
      title: "Scaling Production: ",
      description:
        "We aspire to expand our operations to serve a greater number of families within Kakuma and extend our reach to other refugee communities in need.",
      image: require("../images/equi.png"), // Ensure the image path is correct
    },
    {
      id: 5,
      title: "Improving Equipment and Facilities:",
      description:
        "Investing in better cereal processing technology is crucial for enhancing the quality and efficiency of our production.",
      image: require("../images/steel-pipelines-cables-plant.jpg"), // Ensure the image path is correct
    },
    {
      id: 6,
      title: "Creating Jobs and Empowering Women: ",
      description:
        "We empower local women through jobs in manageable production (cleaning, drying, roasting, marketing), fostering dignity and purpose.",
      image: require("../images/five.jpg"), // Ensure the image path is correct
    },
    {
      id: 7,
      title: "Enhancing Community Nutrition:",
      description:
        "We are committed to continuously improving the nutritional value of our products by utilizing locally available and wholesome ingredients.",
      image: require("../images/two.jpg"), // Ensure the image path is correct
    },
  ];
  const sections = {
      id: 1,
      title: "Our Purpose: Nourishing Potential, Cultivating Change",
      description:
        "we believe nutrition is essential to individual and community well-being. Food is more than sustenance—it empowers, builds resilience, and drives lasting change. We’re committed to fighting malnutrition, uplifting families, and creating accessible, nutritious meals that support healthier futures",
      image: require("../images/ten.jpg"), // Ensure the image is in the correct path
    };
    const Fabiolas = 
    {
      id: 1,
      title: "Our Background",
      description:
        "Founded in 2021 by Fabiola Nzoyikorera, a resilient Burundian refugee and agribusiness graduate, Amazing Food Company is a social enterprise based in Kenya's Kakuma Refugee Camp. Driven by a deep understanding of the nutritional challenges in refugee communities, particularly affecting women and children, Fabiola established the company to produce affordable and nutritious fortified porridge flours.",
      image: require("../images/fabiola2.jpg"), // Ensure the image is in the correct path
    };
   const Fabiola =   {
      id: 2,
      description:
        "Fabiola's journey to creating Amazing Food Company began after she fled violence in Burundi and settled in Kakuma with her husband and three children. Drawing upon her degree in Agribusiness, she recognized firsthand the nutritional gaps impacting her own family and the wider refugee community. This personal experience ignited a passion to make a difference, leading her to develop a nutritious oatmeal blend and produce and sell it to other families within the camp.",
      image: require("../images/fabiola.jpg"), // Ensure the image is in the correct path
      phone: "tel:0759364736",
      email: "mailto:amazingfoodcompany65@gmail.com",
      small: "Got a question? Click below to call or email me!",
      text: "Let's Talk",
      mail: "Email Me",
    };
  const social = 
    {
      id: 1,
      text: "Our Mission",
      description:
        "Amazing Food Company specializes in producing fortified porridge flour using locally sourced cereals. Our current product line includes flour made from:",
      image: require("../images/children.jpg"), // Ensure the image is in the correct path
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
            <h1>About Amazing Food Company</h1>
          </div>
        </div>
      </section>
      <section className="biography">
        <div className="bio-container">
          <div className="biocard" key={Fabiolas.id}>
            <img src={Fabiolas.image} alt={Fabiolas.title} className="bio-image" />
            <div className="bio-content">
              <h2>{Fabiolas.title}</h2>
              <p>{Fabiolas.description}</p>
            </div>
          </div>
          <div className="biocard" key={Fabiola.id}>
            <div className="bio-content">
              <p>{Fabiola.description}</p>
              <div className="bio-cta">
                  <small>{Fabiola.small}</small>
                  <div className="biolink">
                    <Link to={Fabiola.phone} className="biol"><i className="fas fa-phone-volume"/> {Fabiola.text}</Link>
                    <Link to={Fabiola.email} className="bioli"><i className="fas fa-envelope"/> {Fabiola.mail}</Link>
                  </div>
              </div>
            </div>
            <img src={Fabiola.image} alt={Fabiola.title} className="bio-image" />
          </div>
        </div>
      </section>
      <section className="about-mission">
        <div className="m-headers">
          <h2>
            Our Mission
          </h2>
          <p> 
            Amazing Food Company's core mission is to improve nutrition and health outcomes within 
            refugee communities by providing affordable, high-quality, and locally made food products, 
            with a specific focus on the well-being of women and children.
          </p>
        </div>
        <div className="mission-container">
          <div className="mishead">
            <div className="headd">
              <h1>Our Goals</h1>
              <p>
                To achieve our mission, Amazing Food Company is guided by the following key goals:
              </p>
            </div>
          </div>
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