import "./AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import download1 from "./assets/geek.jpeg";
import download2 from "./assets/geek.jpeg";
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who We Are</h1>
        <p>
          We are a Software Company.We create responsive secure websites for
          clients, develops custom software applications, frameworks, and tools
          that help solve problems or achieve a specific outcome.
        </p>
        <Link to="/contacts">
          <button className="btn">CONTACT</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={download1} alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={download2} alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
