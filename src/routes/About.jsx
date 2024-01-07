import React from "react";
import HeroImg2 from "../Components/HeroImg2";
import AboutContent from "../Components/AboutContent";
import Skills from "../Components/Skills";

const About = () => {
  return (
    <div>
      <HeroImg2 heading="ABOUT." text="I am a friendly Foront-End Developer." />
      <AboutContent />
      <Skills />
    </div>
  );
};

export default About;
