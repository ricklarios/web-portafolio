import React from "react";
import "../styles/components/footer.css"; // Make sure to create a corresponding CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
        </ul>
        <p>&copy; 2024 Ricardo Larios. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
