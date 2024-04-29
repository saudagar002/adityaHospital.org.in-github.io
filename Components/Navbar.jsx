import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Navbar.css";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleNavbarToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleNavbarTextClick = () => {
    alert("Navbar text clicked!");
  };

  const handleLinkClick = () => {
    setIsCollapsed(true); // Collapse the Navbar when a link is clicked
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="first-line">Aditya Maternity</span> <br />
          <span className="second-line">and Eye Hospital</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavbarToggle}
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`collapse navbar-collapse justify-content-center ${isCollapsed ? "" : "show"}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>


          


            <li className="nav-item">
              <Link className="nav-link" to="/docter">
                Doctor
              </Link>
            </li>




            
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={handleLinkClick}>
                Gynecology
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ophthalmology" onClick={handleLinkClick}>
                Ophthalmology {/* Corrected spelling */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog" onClick={handleLinkClick}>
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact number and logo with onClick function */}
        <div className="navbar-text" onClick={handleNavbarTextClick}>
          {/* <img src={process.env.PUBLIC_URL + "/YourLogo.png"} /> */}
          <span className="contact-number">Contact: 9881155391</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
