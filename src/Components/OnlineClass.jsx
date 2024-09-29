import React from "react";
import "./OnlineClass.css";
import img_1 from "../assets/online1.jpeg";
import img_2 from "../assets/online2.jpeg";
import img_3 from "../assets/online2.jpeg";
import { Link } from "react-router-dom";

const OnlineClass = () => {
  return (
    <>
      <section className="events section-padding-large background-grey">
        <div className="container">
          <div className="section-title section-title-left section-title-m50">
            <h2>Online Event - PBS College Banka in Bihar</h2>
          </div>
          <div className="events-content">
            <div className="row">
              <article className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 item">
                <figure>
                  <center>
                    <Link to="/">
                      <img
                        src={img_1}
                        alt="LPS GLOBAL School Online Classes Image 1"
                      />
                    </Link>
                  </center>
                </figure>
              </article>
              <article className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 item">
                <figure>
                  <center>
                    <Link to="/">
                      <img
                        src={img_2}
                        alt="LPS GLOBAL School Online Classes Image 2"
                      />
                    </Link>
                  </center>
                </figure>
              </article>

              <article className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 item">
                <figure>
                  <center>
                    <Link to="/">
                      <img
                        src={img_3}
                        alt="LPS GLOBAL School Online Classes Image 3"
                      />
                    </Link>
                  </center>
                </figure>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineClass;
