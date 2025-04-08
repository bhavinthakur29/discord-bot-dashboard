import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="impt-links">
        <Link to="/">Support Server</Link>
        <hr />
        <Link to="/developers">Developers</Link>
        <hr />
        <Link to="/docs/terms-of-service">Terms of Service</Link>
        <hr />
        <Link to="/docs/privacy-policy">Privacy Policy</Link>
      </div>
      <div className="copyright">
        All Rights Reserved &copy; 2025 Enigma Devs
      </div>
    </div>
  );
};

export default Footer;
