import "./FooterStyles.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>254 Westlands</p>
              <p>Nairobi,Kenya</p>
            </div>
            <div className="phone">
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +254742295861
            </div>
            <div className="Email">
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              chepkorircarren9@gmail.com
            </div>
          </div>
          <div className="right">
            <h4> About the Company</h4>
            <p>
              This is a software development company aims at providing software
              solutions to clients.
            </p>
          </div>
          <div className="Social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
