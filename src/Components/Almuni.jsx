import "./Almuni.css";
import React from "react";
import Slider from "react-slick";
import almuni_img_1 from "../assets/sonia-sharma.jpg";
import almuni_img_2 from "../assets/Tanya-Tewatia.jpg";

const Almuni = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="">
            <img src={almuni_img_1} alt="almuni-img" />
            <p>SONIYA B-TECH</p>
          </div>
          <div>
            <img src={almuni_img_2} alt="almuni-img" />
            <p>SONIYA B-TECH</p>
          </div>
          <div>
            <img src={almuni_img_1} alt="almuni-img" />
            <p>SONIYA B-TECH</p>
          </div>
          <div>
            <img src={almuni_img_1} alt="almuni-img" />
            <p>SONIYA B-TECH</p>
          </div>
          <div>
            <img src={almuni_img_1} alt="almuni-img" />
            <p>SONIYA B-TECH</p>
          </div>
          <div>
            <img src={almuni_img_1} alt="almuni-img" />
            <p>SONIYA B-TECH</p>
          </div>
          <div>
            <img src={almuni_img_1} alt="almuni-img" />
            <p>SONIYA B-TECH</p>
          </div>
          <div>
            <img src={almuni_img_1} alt="almuni-img" />
            <p>SONIYA B-TECH</p>
          </div>
          <div>
            <img src={almuni_img_1} alt="almuni-img" />
            <p>SONIYA B-TECH</p>
          </div>
          <div>
            <img src={almuni_img_1} alt="almuni-img" />
            <p>SONIYA B-TECH</p>
          </div>
          <div>
            <img src={almuni_img_1} alt="almuni-img" />
            <p>SONIYA B-TECH</p>
          </div>
          <div>
            <img src={almuni_img_1} alt="almuni-img" />
            <p>SONIYA B-TECH</p>
          </div>
          <div>
            <img src={almuni_img_1} alt="almuni-img" />
            <p>SONIYA B-TECH</p>
          </div>
          <div>
            <img src={almuni_img_1} alt="almuni-img" />
            <p>SONIYA B-TECH</p>
          </div>
          <div>
            <img src={almuni_img_1} alt="almuni-img" />
            <p>SONIYA B-TECH</p>
          </div>
          <div>
            <img src={almuni_img_1} alt="almuni-img" />
            <p>SONIYA B-TECH</p>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Almuni;
