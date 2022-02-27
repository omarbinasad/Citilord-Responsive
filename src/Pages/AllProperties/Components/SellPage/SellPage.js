import React from "react";
import PropertyCard from "../PropertyCard/PropertyCard";

import "./SellPage.css";
const SellPage = () => {
  return (
    <div className="container all-properties-container">
      <h3>All Sell Properties</h3>
      <div className="proeprty-list-container">
        <PropertyCard />
        <PropertyCard />
      </div>
      <div className="proeprty-list-container">
        <PropertyCard />
        <PropertyCard />
      </div>
      <div className="proeprty-list-container">
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  );
};

export default SellPage;
