import React from "react";
import "./Event.css";
import { FaPlay } from "react-icons/fa";

const Event = () => {
  return (
    <>
      <section className="featured">
        <div className="container">
          <div className="section-title section-title-left section-title-m50">
            <h2>Latest Events - PBS College Banka in Bihar </h2>
          </div>
          <div className="featured-content">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pr-xl-0 featured-item">
                <section className="video-tour" style={{ padding: "2px" }}>
                  <div className="video-tour-content">
                    <div
                      className="video bmd-modalButton"
                      data-toggle="modal"
                      data-target="#modal-video-01"
                      data-bmdsrc="https://www.youtube.com/embed/An216DEoUXY"
                      data-bmdwidth="500"
                      data-bmdheight="281"
                    >
                      {/* <img src="images/home1-videotour.jpg" alt="">  */}
                      <div className="video-content">
                        <h3 className="video-title ">
                          74th Independence Day on August 15, 2024{" "}
                          <span>PBS College Banka</span>
                        </h3>
                        <span className="icon-play display-flex-center">
                          <FaPlay />
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pr-xl-0 featured-item">
                <section className="video-tour" style={{ padding: "2px" }}>
                  <div className="video-tour-content">
                    <div
                      className="video bmd-modalButton"
                      data-toggle="modal"
                      data-target="#modal-video-01"
                      data-bmdsrc="https://www.youtube.com/embed/An216DEoUXY"
                      data-bmdwidth="500"
                      data-bmdheight="281"
                    >
                      {/* <img src="images/home1-videotour.jpg" alt="">  */}
                      <div className="video-content">
                        <h3 className="video-title ">
                          74th Independence Day on August 15, 2024{" "}
                          <span>PBS College Banka</span>
                        </h3>
                        <span className="icon-play display-flex-center">
                          <FaPlay />
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
    </>
  );
};

export default Event;
