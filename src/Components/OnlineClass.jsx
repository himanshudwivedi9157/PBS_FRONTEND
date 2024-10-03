import React from "react";
import online_img from "../assets/online1.jpeg";

const OnlineClass = () => {
  return (
    <>
      <section className="events section-padding-large ">
        <div className="container">
          <div className="section-title section-title-left section-title-m50">
            <h2>Online Event - BPS College Banka in Bihar </h2>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4 ">
            <div className="col ">
              <img src={online_img} alt="" />
            </div>
            <div className="col ">
              <div className="col ">
                <img src={online_img} alt="" />
              </div>
            </div>
            <div className="col ">
              <div className="col ">
                <img src={online_img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineClass;
