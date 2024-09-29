import React from "react";
import "./VideoTour.css";
import { FaPlay } from "react-icons/fa";

const VideoTour = () => {
  return (
    <>
      <section className="video-tour">
        <div className="video-tour-content">
          <div
            className="video bmd-modalButton"
            data-toggle="modal"
            data-target="#modal-video-01"
            data-bmdsrc="https://www.youtube.com/embed/57yUpENTiOo"
            data-bmdwidth="500"
            data-bmdheight="281"
          >
            {/* <!-- <img src="images/home1-videotour.jpg" alt=""> --> */}
            <div className="video-content">
              <h3 className="video-title ">
                Watch Campus Life In <span>PBS College Banka in Bihar</span>
              </h3>
              <span className="icon-play display-flex-center">
                <FaPlay />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoTour;
