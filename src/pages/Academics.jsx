import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import imgages from "../assets/images.jpeg";

const Academics = () => {
  const cardStyle = {
    transition: "transform 0.2s",
  };

  const cardHoverStyle = {
    transform: "scale(1.05)",
  };

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
            Academics
          </li>
        </ol>
      </nav>

      <section>
        <div className="container my-5">
          <h1 className="text-center mb-4" style={{ color: "#2c3e50" }}>
            Academic Programs
          </h1>

          <div className="row">
            <div className="col-md-8">
              <section style={sectionStyle}>
                <h2 style={{ color: "#34495e" }}>Programs Offered</h2>
                <ul className="list-group">
                  <li className="list-group-item">
                    Bachelor of Science (B.Sc.)
                  </li>
                  <li className="list-group-item">Bachelor of Arts (B.A.)</li>
                  <li className="list-group-item">
                    Bachelor of Commerce (B.Com)
                  </li>
                  <li className="list-group-item">Master of Science (M.Sc.)</li>
                  <li className="list-group-item">Master of Arts (M.A.)</li>
                  <li className="list-group-item">
                    Master of Commerce (M.Com)
                  </li>
                </ul>
              </section>

              <section style={sectionStyle}>
                <h2 style={{ color: "#34495e" }}>Faculty</h2>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mb-3" style={cardStyle}>
                      <img
                        src={imgages}
                        className="card-img-top"
                        alt="Faculty 1"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Dr. John Doe</h5>
                        <p className="card-text">
                          Professor of Computer Science
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-3" style={cardStyle}>
                      <img
                        src={imgages}
                        className="card-img-top"
                        alt="Faculty 2"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Dr. Jane Smith</h5>
                        <p className="card-text">
                          Associate Professor of Mathematics
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-3" style={cardStyle}>
                      <img
                        src={imgages}
                        className="card-img-top"
                        alt="Faculty 3"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Dr. Emily White</h5>
                        <p className="card-text">
                          Assistant Professor of Physics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section style={sectionStyle}>
                <h2 style={{ color: "#34495e" }}>Academic Calendar</h2>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Event</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>January 10</td>
                      <td>Start of Semester</td>
                    </tr>
                    <tr>
                      <td>February 20</td>
                      <td>Midterm Exams</td>
                    </tr>
                    <tr>
                      <td>May 5</td>
                      <td>End of Semester</td>
                    </tr>
                    <tr>
                      <td>May 15</td>
                      <td>Final Exams</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </div>

            <div className="col-md-4">
              <section style={sectionStyle}>
                <h2 style={{ color: "#34495e" }}>Resources</h2>
                <ul className="list-group">
                  <li className="list-group-item">
                    <a href="/library" className="text-decoration-none">
                      Library
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="/lab" className="text-decoration-none">
                      Laboratory Facilities
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="/admissions" className="text-decoration-none">
                      Admissions
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="/scholarships" className="text-decoration-none">
                      Scholarships
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="/contact" className="text-decoration-none">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Academics;
