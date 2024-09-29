import React from "react";
import "./Ourteam.css";
import web_school from "../assets/lps_web_school_campus.png";
import web_library from "../assets/lps_web_library.png";
import web_smart_class from "../assets/lps_web_smart_class.png";
import web_infirmary from "../assets/lps_web_infirmary.png";

const Ourteam = () => {
  return (
    <>
      <section className="our-team section-padding-large">
        <div className="container">
          <div className="section-title section-title-left section-title-m50">
            <h2>Infrastructure - PBS College Banka in Bihar</h2>
          </div>
          <div className="our-team-content">
            <div className="row">
              <article className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 item">
                <figure>
                  <a href="#">
                    <img src={web_school} alt="SCHOOL CAMPUS" />
                  </a>
                </figure>
                <div className="info">
                  <h3 className="title">
                    <a href="#">SCHOOL CAMPUS </a>
                  </h3>
                  <p className="desc" style={{ textAlign: "justify" }}>
                    The central monitoring system ensures total safety &amp;
                    complete security of the school building and for all the
                    students (CCTVs).The form and the colours of the building
                    have been carefully selected to provide mental stimulation
                    to the children.{" "}
                  </p>
                </div>
              </article>
              <article className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 item">
                <figure>
                  <a href="#">
                    <img src={web_library} alt="LIBRARY" />
                  </a>
                </figure>
                <div className="info">
                  <h3 className="title">
                    <a href="#">LIBRARY </a>
                  </h3>
                  <p className="desc" style={{ textAlign: "justify" }}>
                    Books are a gateway to a world of limitless opportunity. The
                    school boasts of a well-stocked library with books for every
                    age group. There is a reference section and a Teacher's
                    Corner as well.{" "}
                  </p>
                </div>
              </article>
              <article className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 item">
                <figure>
                  <a href="#">
                    <img src={web_smart_class} alt="SMART CLASSROOMS" />
                  </a>
                </figure>
                <div className="info">
                  <h3 className="title">
                    <a href="#">SMART CLASSROOMS </a>
                  </h3>
                  <p className="desc" style={{ textAlign: "justify" }}>
                    LPS Global School is fitted with smart boards in all the
                    classNamerooms. The use of technology motivates the learners
                    by giving them an opportunity to enjoy interactive learning.
                    The subjects also come alive.{" "}
                  </p>
                </div>
              </article>
              <article className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 item">
                <figure>
                  <a href="#">
                    <img src={web_infirmary} alt="INFIRMARY" />
                  </a>
                </figure>
                <div className="info">
                  <h3 className="title">
                    <a href="#">INFIRMARY </a>
                  </h3>
                  <p className="desc" style={{ textAlign: "justify" }}>
                    Our infirmary is staffed by a full time nurse and a visiting
                    doctor who monitor the general physical development of our
                    children and provide immediate first-aid treatment as
                    needed.{" "}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ourteam;
