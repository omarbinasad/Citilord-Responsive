import React from "react";
import PropertyCard from "../PropertyCard/PropertyCard";

import "./LongLetPage.css";
const LongLetPage = () => {
  return (
    <div className="container all-properties-container">
      <h3>All Long Let Properties</h3>
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

export default LongLetPage;
