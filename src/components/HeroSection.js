import "./HeroSectionStyles.css";
import React from "react";
import IntroImg from "./assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="" />
      </div>
      <div className="content">
        <p> HELLO!WELCOME TO CAREMYHUB.</p>
        <h1> Get The Best Services</h1>
        <div>
          <Link to="/products" className="btn">
            {" "}
            Products
          </Link>
          <Link to="/contacts" className="btn btn-light">
            {" "}
            Contacts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
