import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <div className="footer">
      <p>All rights reserved &copy; Booktopia</p>
      <div className="link-container">
        <Link to='/aboutus'>About</Link> | <Link to='/contactus'>Contact Us</Link>
      </div>
    </div>
  );
}

export default Footer;
