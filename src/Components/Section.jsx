import React from "react";
import "./Section.css";
import icon_home from "../assets/icon-home.png";
const Section = () => {
  return (
    <>
      <section className="featured">
        <div className="container">
          <div className="featured-content">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 pr-xl-0 featured-item"
                style={{ backgroundColor: "#BF0F0F" }}
              >
                <article
                  className="item display-flex "
                  style={{ backgroundColor: "#BF0F0F" }}
                >
                  <div
                    className="item-thumb"
                    style={{ backgroundColor: "#BF0F0F" }}
                  >
                    <a href="#" className="display-flex-center">
                      <img src={icon_home} alt="icon home" />
                    </a>
                  </div>
                  <div className="info">
                    <h3 className="title title-regular-25">
                      <a href="#">Tech Integrated Campus </a>
                    </h3>
                    {/* <a href="#" class="readmore">Learn More <i class="la la-arrow-right"></i></a> */}
                  </div>
                </article>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 px-xl-0 featured-item"
                style={{ backgroundColor: "#F6B801" }}
              >
                <article
                  className="item display-flex"
                  style={{ backgroundColor: "#F6B801" }}
                >
                  <div
                    className="item-thumb"
                    style={{ backgroundColor: "#F6B801" }}
                  >
                    <a href="#" className="display-flex-center">
                      <img src={icon_home} alt="icon pencil" />
                    </a>
                  </div>
                  <div className="info">
                    <h3 className="title title-regular-25">
                      <a href="#">Interactive CBSE Curriculum</a>
                    </h3>
                    {/* <a href="#" class="readmore">Learn More <i class="la la-arrow-right"></i></a> */}
                  </div>
                </article>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 pl-xl-0 featured-item"
                style={{ backgroundColor: "#BF0F0F" }}
              >
                <article
                  className="item display-flex"
                  style={{ backgroundColor: "#BF0F0F" }}
                >
                  <div
                    className="item-thumb"
                    style={{ backgroundColor: "#BF0F0F" }}
                  >
                    <a href="#" className="display-flex-center">
                      <img src={icon_home} alt="icon people" />
                    </a>
                  </div>
                  <div class="info">
                    <h3 className="title title-regular-25">
                      <a href="#">Highly Qualified Teachers</a>
                    </h3>
                    {/* <a href="#" class="readmore">Learn More <i class="la la-arrow-right"></i></a> */}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
