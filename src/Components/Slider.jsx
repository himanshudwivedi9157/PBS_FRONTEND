import React from "react";
import "./Slider.css";
import silder_1 from "../assets/slider_1.jpg";
import silder_2 from "../assets/slider_2.jpeg";
import silder_3 from "../assets/slider_3.jpg";
import silder_4 from "../assets/slider_2.jpeg";
import silder_5 from "../assets/slider_5.jpg";

const Slider = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide ">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={silder_5} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={silder_4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={silder_1} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
