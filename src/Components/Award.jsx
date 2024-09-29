import React from "react";
import "./Award.css";
import award_1 from "../assets/lps_award1.png";
import award_2 from "../assets/lps_award2.png";
import award_3 from "../assets/lps_award3.png";

const Award = () => {
  return (
    <section className="aboutus-testimonials2 section-padding-large">
      <div className="container">
        <div className="section-title section-title-left section-title-m50">
          <h2>Awards - LPS GLOBAL School in Noida</h2>
        </div>
        <div className="aboutus-testimonials2-content">
          <div className="row">
            <article className="col item">
              <div className="info background-grey">
                <center>
                  <img src={award_1} alt="LPS GLOBAL School Award" />
                </center>
              </div>
            </article>
            <article className="col item">
              <div className="info background-grey">
                <center>
                  <img src={award_2} alt="LPS GLOBAL School Award" />
                </center>
              </div>
            </article>
            <article className="col item">
              <div className="info background-grey">
                <center>
                  <img src={award_3} alt="LPS GLOBAL School Award" />
                </center>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Award;
