import React from "react";
import "./AboutBanner.css";
import aboutBannerImg from "./aboutus.jpg";
const AboutBanner = () => {
  return (
    <div>
      <div data-aos="zoom-in" data-aos-once="true" className="about-banner">
        <img src={aboutBannerImg} className="about-banner-img" alt="..." />
      </div>
    </div>
  );
};

export default AboutBanner;
