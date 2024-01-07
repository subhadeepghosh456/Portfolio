import React from "react";
import "./WorkCard.Style.css";

import { NavLink } from "react-router-dom";

const WorkCard = ({ imgsrc, title, tech, text, view, source }) => {
  return (
    <div className="project-card">
      <img src={imgsrc} alt="img" />
      <h2 className="project-title">{title}</h2>
      <div className="pro-details">
        <p>{text}</p>
        <p>{tech}</p>
        <div className="pro-btns">
          {/* <NavLink className="btn" to={view}>
            View
          </NavLink> */}
          <NavLink className="btn" to={source}>
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
