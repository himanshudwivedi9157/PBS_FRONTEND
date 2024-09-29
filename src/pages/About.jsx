import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />

      <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
        <ol className="breadcrumb ">
          <li className="breadcrumb-item ">
            <Link to="/About">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            About
          </li>
        </ol>
      </nav>

      <h1 className="p-3">Welcome To About Page</h1>

      <Footer />
    </>
  );
};

export default About;
