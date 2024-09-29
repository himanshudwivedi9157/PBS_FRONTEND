import React from "react";
import "./RecentActivity.css";
import r3 from "../assets/r5.jpeg";
import r2 from "../assets/r4.jpeg";
import r1 from "../assets/r1.jpg";

const RecentActivity = () => {
  return (
    <>
      <section className="events section-padding-large background-grey">
        <div className="container">
          <div className="section-title section-title-left section-title-m50">
            <h2>Recent Activities - PBS College Banka in Bihar </h2>
          </div>
          <div className="events-content">
            <div className="row">
              <article className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 item">
                <figure>
                  <center>
                    <a href="">
                      <img src={r3} alt="R1" />
                    </a>
                  </center>
                </figure>
                <span className="post-date">
                  <span>02 </span>
                  <span>June, 2023 </span>
                </span>
                <div className="info">
                  <h3 className="title">
                    <a href="" target="_blank">
                      CARPE DIEM
                    </a>
                  </h3>
                  <div className="desc">
                    <div className="time-address">
                      <span>
                        <i className="la la-map-marker"></i>PBS College Banka{" "}
                      </span>
                    </div>
                    <p style={{ textAlign: "justify" }}>
                      '150+ students from 25+ schools participated with great
                      enthusiasm. The response received from students was really
                      overwhelming. The motive behind organising the competition
                      was to develop and boost the intellectual, creative and
                      mental abilities of students which was surely fulfilled.
                    </p>
                  </div>
                </div>
              </article>

              <article className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 item">
                <figure>
                  <center>
                    <a href="">
                      <img src={r2} alt="R1" />
                    </a>
                  </center>
                </figure>
                <span className="post-date">
                  <span>02 </span>
                  <span>June, 2024 </span>
                </span>
                <div className="info">
                  <h3 className="title">
                    <a href="#" target="_blank">
                      ECLAT
                    </a>
                  </h3>
                  <div className="desc">
                    <div className="time-address">
                      <span>
                        <i className="la la-map-marker"></i>PBS College Banka{" "}
                      </span>
                    </div>
                    <p style={{ textAlign: "justify" }}>
                      '150+ students from 25+ schools participated with great
                      enthusiasm. The response received from students was really
                      overwhelming. The motive behind organising the competition
                      was to develop and boost the intellectual, creative and
                      mental abilities of students which was surely fulfilled.
                    </p>
                  </div>
                </div>
              </article>

              <article className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 item">
                <figure>
                  <center>
                    <a href="">
                      <img src={r1} alt="R1" />
                    </a>
                  </center>
                </figure>
                <span className="post-date">
                  <span>21 </span>
                  <span>Aug, 2024 </span>
                </span>
                <div className="info">
                  <h3 className="title">
                    <a href="#" target="_blank">
                      Inter School Literary Fest Carpe Diem 4th ED
                    </a>
                  </h3>
                  <div className="desc">
                    <div className="time-address">
                      <span>
                        <i className="la la-map-marker"></i>PBS College Banka{" "}
                      </span>
                    </div>
                    <p style={{ textAlign: "justify" }}>
                      'Carpe diem'- An amalgamation of literary skills is a fest
                      hosted by the PBS College Banka every year. This year the
                      event conducted on August 21, 2021 witnessed an
                      enthusiastic participation from various schools.
                    </p>
                  </div>
                </div>
              </article>

              <article className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 item"></article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentActivity;
