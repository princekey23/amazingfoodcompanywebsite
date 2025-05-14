import React from "react";
import { Link } from "react-router-dom";
import BackToTopButton from "./BackToTopButton";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <BackToTopButton/>
      <p>&copy; {currentYear} Amazing Food Company. All Rights Reserved.</p>
      <small>Designed by <Link to="https://princemwenyemali.vercel.app/" target="_blank">PM | With Love ❤️</Link></small>
    </footer>
  );
}

export default Footer;