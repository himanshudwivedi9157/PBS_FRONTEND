import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import act_1 from "../assets/act_1.jpeg";
import act_2 from "../assets/act_2.jpeg";

const Curriculum = () => {
  const cardStyle = {
    transition: "transform 0.2s",
  };

  // const cardHoverStyle = {
  //   transform: "scale(1.05)",
  // };

  const sectionStyle = {
    marginBottom: "2rem",
  };
  return (
    <>
      <Navbar />
      <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
        <ol className="breadcrumb ">
          <li className="breadcrumb-item ">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Curriculum
          </li>
        </ol>
      </nav>

      <main>
        <div className="container my-5">
          <h1 className="text-center mb-4" style={{ color: "#2c3e50" }}>
            College Activities
          </h1>

          <div className="row">
            <div className="col-md-8">
              <section style={sectionStyle}>
                <h2 style={{ color: "#34495e" }}>Upcoming Events</h2>
                <ul className="list-group">
                  <li className="list-group-item">
                    Annual Sports Day - January 15
                  </li>
                  <li className="list-group-item">
                    Cultural Fest - February 5
                  </li>
                  <li className="list-group-item">Tech Symposium - March 20</li>
                  <li className="list-group-item">
                    Graduation Ceremony - April 10
                  </li>
                </ul>
              </section>

              <section style={sectionStyle}>
                <h2 style={{ color: "#34495e" }}>Recent Activities</h2>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mb-3" style={cardStyle}>
                      <img
                        src={act_1}
                        className="card-img-top"
                        alt="Activity 1"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Hackathon 2024</h5>
                        <p className="card-text">
                          Students showcased their coding skills in a 24-hour
                          hackathon.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-3" style={cardStyle}>
                      <img
                        src={act_2}
                        className="card-img-top"
                        alt="Activity 2"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Art Exhibition</h5>
                        <p className="card-text">
                          Students displayed their artistic talents at the
                          annual art exhibition.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-3" style={cardStyle}>
                      <img
                        src={act_1}
                        className="card-img-top"
                        alt="Activity 3"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Science Fair</h5>
                        <p className="card-text">
                          Innovative projects were presented by students during
                          the science fair.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="col-md-4">
              <section style={sectionStyle}>
                <h2 style={{ color: "#34495e" }}>Photo Gallery</h2>
                <div className="row">
                  <div className="col-6">
                    <img
                      src={act_2}
                      className="img-fluid mb-2"
                      alt="Gallery 1"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={act_1}
                      className="img-fluid mb-2"
                      alt="Gallery 2"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={act_2}
                      className="img-fluid mb-2"
                      alt="Gallery 3"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={act_1}
                      className="img-fluid mb-2"
                      alt="Gallery 4"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Curriculum;
