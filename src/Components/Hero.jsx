import React from "react";
import Slider from "react-slick";

import img_1 from "../assets/1.jpeg";
import img_2 from "../assets/2.jpeg";
import img_3 from "../assets/3.jpeg";
import img_4 from "../assets/4.jpeg";
import img_5 from "../assets/5.jpeg";
import img_6 from "../assets/6.jpeg";
import img_7 from "../assets/7.jpeg";
import img_8 from "../assets/8.jpeg";

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="featured-course featured-course-sidebar section-padding-large">
        <div className="container">
          <div className="section-title section-title-left section-title-m50">
            <h2>Online Classes - PBS College Banka in Bihar</h2>
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <img src={img_1} alt="" />
              </div>
              <div>
                <img src={img_2} alt="" />
              </div>
              <div>
                <img src={img_3} alt="" />
              </div>
              <div>
                <img src={img_4} alt="" />
              </div>
              <div>
                <img src={img_5} alt="" />
              </div>
              <div>
                <img src={img_6} alt="" />
              </div>
              <div>
                <img src={img_7} alt="" />
              </div>
              <div>
                <img src={img_8} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default Responsive;
