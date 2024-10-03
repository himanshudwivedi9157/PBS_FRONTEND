import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_img from "../assets/1.jpeg";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <div class="section-title section-title-left section-title-m50 container section-padding-large">
        <h2>Online Event - LPS GLOBAL School in Noida</h2>
      </div>
      <div className="slider-container container">
        <Slider {...settings}>
          <div>
            <img src={slider_img} alt="slider img" />
          </div>
          <div>
            <img src={slider_img} alt="slider img" />
          </div>
          <div>
            <img src={slider_img} alt="slider img" />
          </div>
          <div>
            <img src={slider_img} alt="slider img" />
          </div>
          <div>
            <img src={slider_img} alt="slider img" />
          </div>
          <div>
            <img src={slider_img} alt="slider img" />
          </div>
          <div>
            <img src={slider_img} alt="slider img" />
          </div>
          <div>
            <img src={slider_img} alt="slider img" />
          </div>
          <div>
            <img src={slider_img} alt="slider img" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default MultipleItems;
