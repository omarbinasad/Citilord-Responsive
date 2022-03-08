import React from "react";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./Associations.css";
import Slider from "react-slick";

const Associations = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
  };
  return (
    <div className="container association-container-extra">
      <h2 className="text-center association-title">{props.name}</h2>
      <div className="py-5 d-flex">
        <div className="associations-slide">
          <img src="" alt="" />
        </div>
        <div className="associations-slide">
          <img src="" alt="" />
        </div>

        <div className="associations-slide">
          <img src="" alt="" />
        </div>
        <div className="associations-slide">
          <img src="" alt="" />
        </div>
        <div className="associations-slide">
          <img src="" alt="" />
        </div>
      </div>
      {/* <Slider className="py-5" {...settings}>
        <div className="associations-slide">
          <img
            src=""
            alt=""
          />
        </div>
        <div className="associations-slide">
          <img
            src=""
            alt=""
          />
        </div>
        <div className="associations-slide">
          <img
            src=""
            alt=""
          />
        </div>
        <div className="associations-slide">
          <img
            src=""
            alt=""
          />
        </div>
        <div className="associations-slide">
          <img
            src=""
            alt=""
          />
        </div>
        <div className="associations-slide">
          <img
            src=""
            alt=""
          />
        </div>
        <div className="associations-slide">
          <img
            src=""
            alt=""
          />
        </div>
        <div className="associations-slide">
          <img
            src=""
            alt=""
          />
        </div>
        <div className="associations-slide">
          <img
            src=""
            alt=""
          />
        </div>
      </Slider> */}
    </div>
  );
};

export default Associations;
