import React from "react";
import "./Calender.css";

const Calender = () => {
  return (
    <>
      <section className="events events-page">
        <div className="container">
          <div className="section-title section-title-left section-title-m50">
            <h2>Activity Calendar September 2024-2025</h2>
          </div>
          <div className="events-content">
            <ul className="filter-events display-flex-center">
              <li>
                <span className="is-checked" data-filter="*">
                  All Activites{" "}
                </span>
              </li>
              <li>
                <span data-filter=".sa">Special Assemblies </span>
              </li>
              <li>
                <span data-filter=".pn">BA</span>
              </li>
              <li>
                <span data-filter=".n">BSC</span>
              </li>
              <li>
                <span data-filter=".kg">B.COM</span>
              </li>
              <li>
                <span data-filter=".1">BCA</span>
              </li>
              <li>
                <span data-filter=".2">MCA</span>
              </li>
            </ul>
            <div className="events-grid">
              <div className="row" align="left">
                <article className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 item sa">
                  <div className="info">
                    <h3
                      className="title"
                      style={{ color: "#BF0F0F", backgroundColor: "#FFA037" }}
                    >
                      Special Assemblies
                    </h3>
                    <div className="desc" align="left">
                      <ul>
                        <li>Grandparent's Day</li>
                        <li>Teachers' Day</li>
                        <li>Gandhi Jayanti</li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 item pn">
                  <div className="info">
                    <h3
                      className="title"
                      style={{ color: "#BF0F0F", backgroundColor: "#FFA037" }}
                    >
                      BA
                    </h3>
                    <div className="desc" align="left">
                      <ul>
                        <li>Make a family tree</li>
                        <li>Make a respect headband</li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 item n">
                  <div className="info">
                    <h3
                      className="title"
                      style={{ color: "#BF0F0F", backgroundColor: "#FFA037" }}
                    >
                      BSC
                    </h3>
                    <div className="desc" align="left">
                      <ul>
                        <li>Fancy Dress</li>
                        <li>Origami flower making</li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 item kg">
                  <div className="info">
                    <h3
                      className="title"
                      style={{ color: "#BF0F0F", backgroundColor: "#FFA037" }}
                    >
                      B.COM
                    </h3>
                    <div className="desc" align="left">
                      <ul>
                        <li>Speech day – respect for you is …. </li>
                        <li>Make a respect bracelet </li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 item 1">
                  <div className="info">
                    <h3
                      className="title"
                      style={{ color: "#BF0F0F", backgroundColor: "#FFA037" }}
                    >
                      BCA
                    </h3>
                    <div className="desc" align="left">
                      <ul>
                        <li>
                          Our little scientists – present a science experiment{" "}
                        </li>
                        <li>Little bookworms - Read a story </li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 item 2">
                  <div className="info">
                    <h3
                      className="title"
                      style={{ color: "#BF0F0F", backgroundColor: "#FFA037" }}
                    >
                      MCA
                    </h3>
                    <div className="desc" align="left">
                      <ul>
                        <li>
                          Our little scientists - present a science experiment{" "}
                        </li>
                        <li>Be an Author – Make your own story with props </li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calender;
