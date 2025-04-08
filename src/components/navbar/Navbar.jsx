import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className={`navbar`}>
      <div className="logo">
        <img src="https://placehold.co/150x150" alt="Logo" />
      </div>

      <div className="search-box">
        <form action="">
          <input type="text" placeholder="Type to search command" />
        </form>
      </div>

      {location.pathname !== "/dashboard" && (
        <div className="auth-btn">
          <button onClick={handleLoginClick}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
