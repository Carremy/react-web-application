import "./ServiceCardStyles.css";
import React from "react";
const ServiceCard = () => {
  return (
    <div className="work-container">
      <h1 className="service.heading">SERVICES</h1>
      <div className="service-container">
        <div className="service-card">
          <h2 className="service-tittle">SERVICES</h2>
          <div className="pro-details">
            <p>Custom Software Development.</p>
            <p>Web Application Development.</p>
            <p>Mobile Application Development.</p>
            <p>Cloud Consulting.</p>
            <p>DevOps Automation.</p>
            <p>Software Prototyping.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
