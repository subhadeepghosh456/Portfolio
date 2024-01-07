import React from "react";
import "./WorkCard.Style.css";

import { ProjectCardData } from "./WorkCardData";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {ProjectCardData.map((value, index) => {
          return (
            <WorkCard
              key={index}
              imgsrc={value.imgsrc}
              title={value.title}
              text={value.text}
              view={value.view}
              source={value.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
