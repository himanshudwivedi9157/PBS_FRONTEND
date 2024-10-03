import React from "react";
import "./Award.css";
import award_1 from "../assets/lps_award1.png";
import award_2 from "../assets/lps_award2.png";
import award_3 from "../assets/lps_award3.png";

const Award = () => {
  return (
    <section className="events section-padding-large ">
      <div className="container">
        <div className="section-title section-title-left section-title-m50">
          <h2>Awards - BPS College Banka in Bihar </h2>
        </div>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4 ">
          <div class="col background-grey">
            <div className="col">
              <img src={award_1} alt="" />
            </div>
          </div>
          <div class="col  background-grey">
            <div className="col">
              <img src={award_2} alt="" />
            </div>
          </div>
          <div class="col  background-grey">
            <div className="col">
              <img src={award_3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Award;
