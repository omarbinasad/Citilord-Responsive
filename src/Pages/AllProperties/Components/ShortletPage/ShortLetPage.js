import React from "react";
import PropertyCard from "../PropertyCard/PropertyCard";

import "./ShortLetPage.css";
const ShortLetPage = () => {
  return (
    <div className="container all-properties-container">
      <h3>All Short Let Properties</h3>
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

export default ShortLetPage;
