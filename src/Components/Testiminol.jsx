import React from "react";
import "./Testiminol.css";
import avatar from "../assets/sonia-sharma.jpg";

const Testiminol = () => {
  return (
    <>
      <section className="events section-padding-large ">
        <div className="container">
          <div className="section-title section-title-left section-title-m50">
            <h2>Testimonials </h2>
          </div>
          <div class="row row-cols-1 row-cols-md-3 g-4 container">
            <div class="col ">
              <div class="card h-100 rounded-0 background-grey border border-0">
                <div class="card-body background-grey">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    "I enjoy coming to school every day. My teachers explain all
                    the topics very nicely. The school gives me a lot of
                    opportunities to participate in competitions and for public
                    speaking during assemblies &amp; in class. I really enjoy
                    being in the school as my teachers' supports me very much in
                    all activities and make us learn things in a very
                    interesting way. Proud to be a Part of LPS Global School as
                    it's the Top school in Noida."
                  </p>
                </div>
                <div>
                  <div className="avatar-container">
                    <img src={avatar} alt="avatar" />
                    <h5>Himanshu Dwivedi</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col ">
              <div class="card h-100 rounded-0 background-grey border border-0">
                <div class="card-body background-grey">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    "I enjoy coming to school every day. My teachers explain all
                    the topics very nicely. The school gives me a lot of
                    opportunities to participate in competitions and for public
                    speaking during assemblies &amp; in class. I really enjoy
                    being in the school as my teachers' supports me very much in
                    all activities and make us learn things in a very
                    interesting way. Proud to be a Part of LPS Global School as
                    it's the Top school in Noida."
                  </p>
                </div>
                <div>
                  <div className="avatar-container">
                    <img src={avatar} alt="avatar" />
                    <h5>Himanshu Dwivedi</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col ">
              <div class="card h-100 rounded-0 background-grey border border-0">
                <div class="card-body background-grey">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    "I enjoy coming to school every day. My teachers explain all
                    the topics very nicely. The school gives me a lot of
                    opportunities to participate in competitions and for public
                    speaking during assemblies &amp; in class. I really enjoy
                    being in the school as my teachers' supports me very much in
                    all activities and make us learn things in a very
                    interesting way. Proud to be a Part of LPS Global School as
                    it's the Top school in Noida."
                  </p>
                </div>
                <div>
                  <div className="avatar-container">
                    <img src={avatar} alt="avatar" />
                    <h5>Himanshu Dwivedi</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testiminol;
