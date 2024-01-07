import React from "react";
import "./AboutContent.Styles.css";
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I'm a Javascript Developer.I love to code.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="image1" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="image2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
