import React from "react";
import PropertyTab from "../Components/PropertyTab/PropertyTab";
import PropertyCarousel from "../Components/PropertyCarousel/PropertyCarousel";
import "./SingleProperty.css";
import PropertyDescription from "../Components/Propertydescription/PropertyDescription";
import KeyFeatures from "../Components/KeyFeatures/KeyFeatures";

const SingleProperty = () => {
  return (
    <div className="single-property-main">
      <div className="carosel-menutab-description-container">
        <div className="carosel-menutab-container">
          <PropertyCarousel />
          <PropertyTab />
        </div>
        <PropertyDescription />
      </div>
      <KeyFeatures />
    </div>
  );
};

export default SingleProperty;
