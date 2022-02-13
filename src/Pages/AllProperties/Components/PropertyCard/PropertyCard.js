import React from "react";
import { Link } from "react-router-dom";
import "./PropertyCard.css";
import PropertyImg1 from "./property1.jpg";

const PropertyCard = () => {
  return (
    <div className="property-card">
      <div className="property-card-img">
        <img src={PropertyImg1} alt="" />
      </div>
      <div className="property-card-info">
        <div className="property-card-date">
          <span>Sunday</span>
          <span>October 27 2222</span>
        </div>
        <h1 className="property-card-title">Property Title/Name</h1>
        <p className="property-card-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero animi
          repellat mollitia aut voluptatem dolores asperiores temporibus ea
          ipsum iste pariatur.
        </p>
        <a href="#" className="property-card-btn">
          See Details
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;
