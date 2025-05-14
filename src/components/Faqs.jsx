import React, { useState } from 'react';

const FAQs = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <h2>Frequently Asked Questions</h2>
      <ul className="faqs-list">
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item">
            <button
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleQuestionClick(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div
                id={`faq-answer-${index}`}
                className="faq-answer"
              >
                {faq.answer}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Example usage:
const faqData = [
  {
    question: "What are the main ingredients in Amazing Family Porridge?",
    answer: "Our Amazing Family Porridge is a nutritious blend of maize, wheat, sorghum, soya, sesame, groundnuts, finger millet, and rice."
  },
  {
    question: "What are the ingredients in Amazing Special Porridge?",
    answer: "Amazing Special Porridge offers a simpler, yet equally nourishing blend of just sesame and soya."
  },
  {
    question: "Are your porridges suitable for children?",
    answer: "Absolutely! Our porridges are specifically crafted with children in mind, offering essential nutrients and a taste they'll enjoy."
  },
  {
    question: "What are the nutritional benefits of Amazing Family Porridge?",
    answer: "This porridge is rich in vitamins and minerals from the diverse range of grains and nuts, providing sustained energy and supporting healthy growth and development."
  },
  {
    question: "What are the benefits of Amazing Special Porridge?",
    answer: "Amazing Special Porridge is a good source of protein and healthy fats from sesame and soya, contributing to energy levels and overall well-being."
  },
  {
    question: "Do your porridges contain any artificial additives?",
    answer: "No, we are committed to providing simple, balanced nutrition using naturally sourced ingredients with zero artificial additives."
  },
  {
    question: "Are your products rich in vitamins and minerals?",
    answer: "Yes, our Amazing Family Porridge, in particular, is formulated to be rich in essential vitamins and minerals to support your child's health."
  },
  {
    question: "Are the ingredients naturally sourced?",
    answer: "Yes, we prioritize using naturally sourced ingredients in all our porridge blends."
  },
  {
    question: "How easy are your porridges to prepare?",
    answer: "Our porridges are designed for busy families and are very easy to prepare. Simply follow the instructions on the packaging for a quick and nutritious meal."
  },
  {
    question: "What is the best way to serve your porridge to children?",
    answer: "Serve warm. You can adjust the consistency with more or less liquid to suit your child's preference. Feel free to add fruit or a drizzle of natural sweetener if desired."
  },
  {
    question: "Why should I trust your brand?",
    answer: "Parents trust us because we use naturally sourced ingredients, focus on simple and balanced nutrition, and never include artificial additives in our products. We are committed to providing healthy and delicious meals for your family."
  },
  {
    question: "Where are your products made?",
    answer: "[You'll need to fill in this answer based on your production location.]"
  },
  {
    question: "Do you offer different sizes or packaging?",
    answer: "[You'll need to fill in this answer based on your product offerings.]"
  },
  {
    question: "How can I learn more about your mission?",
    answer: "You can learn more about our mission and values on our 'About Us' page [If you have one, link it here] or by contacting us directly."
  },
];

export default FAQs;