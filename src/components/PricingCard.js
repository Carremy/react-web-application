import "./PricingCardStyles.css";
import React from "react";
import { Link } from "react-router-dom";
const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3> - Basic-</h3>
          <p className="bar"> $120</p>
          <p>-3 days</p>
          <p>Responsive Design</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
        <div className="pricing">
          <div className="card-container">
            <div className="card">
              <h3> - Basic-</h3>
              <p className="bar"> $220</p>
              <p>-4 days</p>
              <p>Responsive Design</p>
              <Link to="/contact" className="btn">
                PURCHASE NOW
              </Link>
            </div>
            <div className="pricing">
              <div className="card-container">
                <div className="card">
                  <h3> - Basic-</h3>
                  <p className="bar"> $300</p>
                  <p>-5 days</p>
                  <p>Responsive Design</p>
                  <Link to="/contact" className="btn">
                    PURCHASE NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
