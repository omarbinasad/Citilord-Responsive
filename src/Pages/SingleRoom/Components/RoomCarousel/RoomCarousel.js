import React from "react";
import propertyImg from "../../../Home/components/Banner/home.jpg";
import propertyImg2 from "../../../Home/components/Banner/home2.jpg";
import propertyImg3 from "../../../Home/components/Banner/home3.jpg";

const RoomCarousel = () => {
  return (
    <div className="property-carousel-container">
      <div
        id="carouselExampleCaptions"
        className="property-carousel carousel slide"
        data-bs-ride="carousel"
      >
        <div className="property-carousel-indicators carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="property-carousel-inner carousel-inner">
          <div on className="carousel-item active">
            <a href="#property-carousel-lightbox1">
              <img src={propertyImg} className=" d-block w-100" alt="..." />
            </a>
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>First slide label</h5>
          <p>
            Some representative placeholder content for the first slide.
          </p> */}
            </div>
          </div>
          <div className="carousel-item">
            <a href="#property-carousel-lightbox2">
              <img src={propertyImg2} className="d-block w-100" alt="..." />
            </a>

            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Second slide label</h5>
          <p>
            Some representative placeholder content for the second slide.
          </p> */}
            </div>
          </div>
          <div className="carousel-item">
            <a href="#property-carousel-lightbox3">
              {" "}
              <img src={propertyImg3} className=" d-block w-100" alt="..." />
            </a>

            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Third slide label</h5>
          <p>
            Some representative placeholder content for the third slide.
          </p> */}
            </div>
          </div>
        </div>
        <button
          className="property-carousel-prev-btn carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="property-carousel-next-btn carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <!-- Lightbox 01 --> */}
      <div className="light-box" id="property-carousel-lightbox1">
        {" "}
        <span className="close-btn">
          <a href="#">
            <i className="fas fa-times"></i>
          </a>
        </span>
        <div className="edges">
          <div className="inner-image">
            <img src={propertyImg} alt="image1" className="swap" />
            <span className="image-title">Click Here for Learn More...</span>
          </div>
        </div>
        <span className="next-btn">
          <a href="#property-carousel-lightbox2">
            <i className="fas fa-chevron-right"></i>
          </a>
        </span>
        <span className="previous-btn">
          <a href="#property-carousel-lightbox3">
            <i className="fas fa-chevron-left"></i>
          </a>
        </span>
      </div>
      {/* <!-- Lightbox 02 --> */}
      <div className="light-box" id="property-carousel-lightbox2">
        {" "}
        <span className="close-btn">
          <a href="#">
            <i className="fas fa-times"></i>
          </a>
        </span>
        <div className="edges">
          <div className="inner-image">
            <img src={propertyImg2} alt="image2" className="swap" />
            <span className="image-title">Click Here for Learn More...</span>
          </div>
        </div>
        <span className="next-btn">
          <a href="#property-carousel-lightbox3">
            <i className="fas fa-chevron-right"></i>
          </a>
        </span>
        <span className="previous-btn">
          <a href="#property-carousel-lightbox1">
            <i className="fas fa-chevron-left"></i>
          </a>
        </span>
      </div>
      {/* <!-- Lightbox 03 --> */}
      <div className="light-box" id="property-carousel-lightbox3">
        {" "}
        <span className="close-btn">
          <a href="#">
            <i className="fas fa-times"></i>
          </a>
        </span>
        <div className="edges">
          <div className="inner-image">
            <img src={propertyImg3} alt="image3" className="swap" />
            <span className="image-title">Click Here for Learn More...</span>
          </div>
        </div>
        <span className="next-btn">
          <a href="#property-carousel-lightbox1">
            <i className="fas fa-chevron-right"></i>
          </a>
        </span>
        <span className="previous-btn">
          <a href="#property-carousel-lightbox2">
            <i className="fas fa-chevron-left"></i>
          </a>
        </span>
      </div>
    </div>
  );
};

export default RoomCarousel;
