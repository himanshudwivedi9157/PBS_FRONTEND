import React from "react";
import "./FeatureCourse.css";

const FeatureCourse = () => {
  return (
    <>
      <section className="featured-course featured-course-sidebar section-padding-large">
        <div className="container">
          <div className="section-title section-title-left section-title-m50">
            <h2>What parents say about PBS College Banka in Bihar</h2>
          </div>
          <div className="featured-course-content featured-course-slider">
            <div className="row">
              <article className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 item">
                <div className="item-thumb" style={{ textAlign: "center" }}>
                  <iframe
                    width="270"
                    height="180"
                    src="https://www.youtube.com/embed/hCanbKyyoTs"
                    frameborder="0"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </article>
              <article className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 item">
                <div className="item-thumb" style={{ textAlign: "center" }}>
                  <iframe
                    width="270"
                    height="180"
                    src="https://www.youtube.com/embed/pLfhtFCpPwA"
                    frameborder="0"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </article>
              <article className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 item">
                <div className="item-thumb" style={{ textAlign: "center" }}>
                  <iframe
                    width="270"
                    height="180"
                    src="https://www.youtube.com/embed/D5jX66m1AYs"
                    frameborder="0"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </article>
              <article className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 item">
                <div className="item-thumb" style={{ textAlign: "center" }}>
                  <iframe
                    width="270"
                    height="180"
                    src="https://www.youtube.com/embed/MleGUU28dNY"
                    frameborder="0"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureCourse;
