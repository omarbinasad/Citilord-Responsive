import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

const Gallery = () => {
  return (
    // className="py-5"
    <div style={{ paddingBottom: "40px" }}>
      <h1
        className="text-center"
        style={{ fontWeight: "bold", paddingBottom: "20px" }}
      >
        Gallery
      </h1>
      <div className="img-gallery-container">
        <div className="gallery">
          <div className="gallery-item">
            <img
              className="gallery-image"
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
              alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
            />
          </div>
          <div className="gallery-item">
            <img
              className="gallery-image"
              src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
              alt="sunset behind San Francisco city skyline"
            />
          </div>
          <div className="gallery-item">
            <img
              className="gallery-image"
              src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
              alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
            />
          </div>{" "}
        </div>{" "}
        <div className="pt-4 d-flex justify-content-center align-items-center">
          <Link className="view-more-btn" to="/gallery">
            <Button>View More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
