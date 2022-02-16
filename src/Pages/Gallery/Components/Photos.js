import React from "react";
import "./Photos.css";

const Photos = () => {
  return (
    <div className="container">
      <div className="photos-wrap-box">
        <ul className="gallery-Photos-container">
          <li className="image-thumbnail">
            <a href="#lightbox_1">
              <img
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                alt="Summer Season"
                className="image"
              />
            </a>
          </li>
          <li className="image-thumbnail">
            <a href="#lightbox_2">
              <img
                src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                alt="Summer Season"
                className="image"
              />
            </a>
          </li>
          <li className="image-thumbnail">
            <a href="#lightbox_3">
              <img
                src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                alt="Summer Season"
                className="image"
              />
            </a>
          </li>
          <li className="image-thumbnail">
            <a href="#lightbox_4">
              <img
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                alt="Summer Season"
                className="image"
              />
            </a>
          </li>
          <li className="image-thumbnail">
            <a href="#lightbox_5">
              <img
                src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                alt="Summer Season"
                className="image"
              />
            </a>
          </li>
          <li className="image-thumbnail">
            <a href="#lightbox_6">
              <img
                src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                alt="Summer Season"
                className="image"
              />
            </a>
          </li>
        </ul>
      </div>{" "}
      {/* <!-- Lightbox 01 --> */}
      <div className="light-box" id="lightbox_1">
        {" "}
        <span className="close-btn">
          <a href="#">
            <i className="fas fa-times"></i>
          </a>
        </span>
        <div className="edges">
          <div className="inner-image">
            <img
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
              alt="image 01"
              className="swap"
            />
            <span className="image-title">Click Here for Learn More...</span>
          </div>
        </div>
        <span className="next-btn">
          <a href="#lightbox_2">
            <i className="fas fa-chevron-right"></i>
          </a>
        </span>
        <span className="previous-btn">
          <a href="#lightbox_6">
            <i className="fas fa-chevron-left"></i>
          </a>
        </span>
      </div>
      {/* <!-- Lightbox 02 --> */}
      <div className="light-box" id="lightbox_2">
        <span className="close-btn">
          <a href="#">
            <i className="fas fa-times"></i>
          </a>
        </span>
        <div className="edges">
          <div className="inner-image">
            <img
              src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
              alt="image 02"
            />
            <span className="image-title">Click Here for Learn More...</span>
          </div>
        </div>
        <span className="next-btn">
          <a href="#lightbox_3">
            <i className="fas fa-chevron-right"></i>
          </a>
        </span>
        <span className="previous-btn">
          <a href="#lightbox_1">
            <i className="fas fa-chevron-left"></i>
          </a>
        </span>
      </div>
      {/* <!-- Lightbox 03 --> */}
      <div className="light-box" id="lightbox_3">
        <span className="close-btn">
          <a href="#">
            <i className="fas fa-times"></i>
          </a>
        </span>
        <div className="edges">
          <div className="inner-image">
            <img
              src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
              alt="image 03"
            />
            <span className="image-title">Click Here for Learn More...</span>
          </div>
        </div>
        <span className="next-btn">
          <a href="#lightbox_4">
            <i className="fas fa-chevron-right"></i>
          </a>
        </span>
        <span className="previous-btn">
          <a href="#lightbox_2">
            {" "}
            <i className="fas fa-chevron-left"></i>
          </a>
        </span>
      </div>
      {/* <!-- Lightbox 04 --> */}
      <div className="light-box" id="lightbox_4">
        <span className="close-btn">
          <a href="#">
            <i className="fas fa-times"></i>
          </a>
        </span>
        <div className="edges">
          <div className="inner-image">
            <img
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
              alt="image 04"
            />
            <span className="image-title">Click Here for Learn More...</span>
          </div>
        </div>
        <span className="next-btn">
          <a href="#lightbox_5">
            {" "}
            <i className="fas fa-chevron-right"></i>
          </a>
        </span>
        <span className="previous-btn">
          <a href="#lightbox_3">
            {" "}
            <i className="fas fa-chevron-left"></i>
          </a>
        </span>
      </div>
      {/* <!-- Lightbox 05 --> */}
      <div className="light-box" id="lightbox_5">
        <span className="close-btn">
          <a href="#">
            <i className="fas fa-times"></i>
          </a>
        </span>
        <div className="edges">
          <div className="inner-image">
            <img
              src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
              alt="image 05"
            />
            <span className="image-title">Click Here for Learn More...</span>
          </div>
        </div>
        <span className="next-btn">
          <a href="#lightbox_6">
            {" "}
            <i className="fas fa-chevron-right"></i>
          </a>
        </span>
        <span className="previous-btn">
          <a href="#lightbox_4">
            {" "}
            <i className="fas fa-chevron-left"></i>
          </a>
        </span>
      </div>
      {/* <!-- Lightbox 06 --> */}
      <div className="light-box" id="lightbox_6">
        <span className="close-btn">
          <a href="#">
            <i className="fas fa-times"></i>
          </a>
        </span>
        <div className="edges">
          <div className="inner-image">
            <img
              src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
              alt="image 06"
            />
            <span className="image-title">Click Here for Learn More...</span>
          </div>
        </div>
        <span className="next-btn">
          <a href="#lightbox_1">
            {" "}
            <i className="fas fa-chevron-right"></i>
          </a>
        </span>
        <span className="previous-btn">
          <a href="#lightbox_5">
            <i className="fas fa-chevron-left"></i>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Photos;
