import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OrderForm from "./components/OrderForm";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <Router>
      <Navbar onOrderClick={handleOpenForm} />
      <Routes>
        <Route path="/" element={<Home onOrderClick={handleOpenForm} />} />
        <Route path="/about" element={<About onOrderClick={handleOpenForm} />} />
        <Route path="/products" element={<Products onOrderClick={handleOpenForm} />} />
        <Route path="/contact" element={<Contact onOrderClick={handleOpenForm} />} />
      </Routes>
      {showForm && <OrderForm onClose={handleCloseForm} />}
      <Footer />
    </Router>
  );
}

export default App;