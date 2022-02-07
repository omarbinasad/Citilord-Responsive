import React from "react";
import AboutBanner from "../Components/AboutBanner/AboutBanner";
import AboutUs from "../Components/AboutUs/AboutUs";
import Gallery from "../Components/Gallery/Gallery";
import Team from "../Components/Team/Team";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <div className="container">
        <AboutUs></AboutUs>
        <Team></Team>
        <Gallery></Gallery>
      </div>
    </div>
  );
};

export default About;
