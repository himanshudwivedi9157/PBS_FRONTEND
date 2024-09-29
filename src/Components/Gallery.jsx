import React from "react";
import "./Gallery.css";
import stu_1 from "../assets/1.jpeg";
import stu_2 from "../assets/1.JPG";
import stu_3 from "../assets/2.jpeg";
import stu_4 from "../assets/2.JPG";

const Gallery = () => {
  return (
    <>
      <section className="our-gallery section-padding-large">
        <div className="container">
          <div className="section-title section-title-left section-title-m50">
            <h2>Gallery - LPS GLOBAL School in Noida</h2>
          </div>
          <div className="our-gallery-content">
            <div className="row">
              <div className="item">
                <figure>
                  <a
                    href={stu_1}
                    className="grouped_elements"
                    data-fancybox="gallery"
                  >
                    <img src={stu_2} alt="LPS GLOBAL School Gallery Image 1" />
                  </a>
                </figure>
              </div>
              <div className="item">
                <figure>
                  <a
                    href={stu_3}
                    className="grouped_elements"
                    data-fancybox="gallery"
                  >
                    <img src={stu_4} alt="LPS GLOBAL School Gallery Image 2" />
                  </a>
                </figure>
              </div>
              <div className="item">
                <figure>
                  <a
                    href={stu_1}
                    className="grouped_elements"
                    data-fancybox="gallery"
                  >
                    <img src={stu_2} alt="LPS GLOBAL School Gallery Image 3" />
                  </a>
                </figure>
              </div>
              <div className="item">
                <figure>
                  <a
                    href={stu_3}
                    className="grouped_elements"
                    data-fancybox="gallery"
                  >
                    <img src={stu_4} alt="LPS GLOBAL School Gallery Image 4" />
                  </a>
                </figure>
              </div>
              <div className="item">
                <figure>
                  <a
                    href={stu_1}
                    className="grouped_elements"
                    data-fancybox="gallery"
                  >
                    <img src={stu_2} alt="LPS GLOBAL School Gallery Image 5" />
                  </a>
                </figure>
              </div>
              <div className="item">
                <figure>
                  <a
                    href={stu_3}
                    className="grouped_elements"
                    data-fancybox="gallery"
                  >
                    <img src={stu_4} alt="LPS GLOBAL School Gallery Image 6" />
                  </a>
                </figure>
              </div>
              <div className="item">
                <figure>
                  <a
                    href={stu_1}
                    className="grouped_elements"
                    data-fancybox="gallery"
                  >
                    <img src={stu_2} alt="LPS GLOBAL School Gallery Image 7" />
                  </a>
                </figure>
              </div>
              <div className="item">
                <figure>
                  <a
                    href={stu_3}
                    className="grouped_elements"
                    data-fancybox="gallery"
                  >
                    <img src={stu_4} alt="LPS GLOBAL School Gallery Image 8" />
                  </a>
                </figure>
              </div>
              <div className="item">
                <figure>
                  <a
                    href={stu_1}
                    className="grouped_elements"
                    data-fancybox="gallery"
                  >
                    <img src={stu_2} alt="LPS GLOBAL School Gallery Image 9" />
                  </a>
                </figure>
              </div>
              <div className="item">
                <figure>
                  <a
                    href={stu_1}
                    className="grouped_elements"
                    data-fancybox="gallery"
                  >
                    <img src={stu_1} alt="LPS GLOBAL School Gallery Image 10" />
                  </a>
                </figure>
              </div>
              <div className="item">
                <figure>
                  <a
                    href={stu_1}
                    className="grouped_elements"
                    data-fancybox="gallery"
                  >
                    <img src={stu_1} alt="LPS GLOBAL School Gallery Image 11" />
                  </a>
                </figure>
              </div>
              <div className="item">
                <figure>
                  <a
                    href={stu_1}
                    className="grouped_elements"
                    data-fancybox="gallery"
                  >
                    <img src={stu_1} alt="LPS GLOBAL School Gallery Image 12" />
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
