import React from "react";
import PropertyCard from "../Components/PropertyCard/PropertyCard";
import "./AllProperties.css";
const AllProperties = () => {
  return (
    <div className="container all-properties-container py-5">
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

export default AllProperties;
