import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import facuilty_img from "../assets/faculity_img.jpeg";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" }); // Reset form
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
            Careers
          </li>
        </ol>
      </nav>
      <main>
        <div className="container my-5">
          <h1 className="text-center mb-4" style={{ color: "#2c3e50" }}>
            Faculty Members
          </h1>

          <section className="mb-5">
            <h2 style={{ color: "#34495e" }}>Meet Our Faculty</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-3">
                  <img
                    src={facuilty_img}
                    className="card-img-top"
                    alt="Faculty 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Dr. Alice Smith</h5>
                    <p className="card-text">Professor of Computer Science</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-3">
                  <img
                    src={facuilty_img}
                    className="card-img-top"
                    alt="Faculty 2"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Dr. John Doe</h5>
                    <p className="card-text">
                      Associate Professor of Mathematics
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-3">
                  <img
                    src={facuilty_img}
                    className="card-img-top"
                    alt="Faculty 3"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Dr. Mary Johnson</h5>
                    <p className="card-text">Assistant Professor of Physics</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h2 style={{ color: "#34495e" }}>Departments</h2>
            <ul className="list-group">
              <li className="list-group-item">Computer Science Department</li>
              <li className="list-group-item">Mathematics Department</li>
              <li className="list-group-item">Physics Department</li>
              <li className="list-group-item">Chemistry Department</li>
              <li className="list-group-item">Biology Department</li>
            </ul>
          </section>

          <section>
            <h2 style={{ color: "#34495e" }}>Contact Us</h2>
            <form onSubmit={handleSubmit} className="mb-3">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Careers;
