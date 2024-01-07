import "./Skills.Style.css";
import React from "react";
import { FaReact } from "react-icons/fa";
import { SkillData } from "./SkillData";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skill-container">
        {SkillData.map((item, index) => {
          return (
            <div className="skill" key={index}>
              <p>{item.name}</p>
              <div className="progress">
                <span>{item.progress}%</span>
                <div style={{ width: `${item.progress}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
