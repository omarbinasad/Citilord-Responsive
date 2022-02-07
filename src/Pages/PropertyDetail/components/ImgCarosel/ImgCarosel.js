import React, { useState } from "react";
import { ImgCaroselData } from "./ImgCaroselDummyData";

import Slider from "react-slick";
import "./ImgCarosel.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgCarosel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   arrows: true,
  // };
  // return (
  //   <Carousel activeIndex={index} onSelect={handleSelect}>
  //     <Carousel.Item>
  //       <img
  //         className="d-block w-100"
  //         src="holder.js/800x400?text=First slide&bg=373940"
  //         alt="First slide"
  //       />
  //       <Carousel.Caption>
  //         <h3>First slide label</h3>
  //         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  //       </Carousel.Caption>
  //     </Carousel.Item>
  //   </Carousel>
  // );
};

export default ImgCarosel;
