import React from "react";
import "./Footer.Style.css";
import { FaHome } from "react-icons/fa";
import { FaPhone, FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
            <div>
              <p>Durgapur,West Bengal.</p>
              <p>India.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              9093289209
            </h4>
          </div>
          <div className="email">
            <h4>
              <MdEmail
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              subhadeepg71@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
            <Link
              to={"https://twitter.com/subhadeep_24/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX
                size={30}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/subhadeep1234544/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
