import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Navbar />
      <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
        <ol className="breadcrumb ">
          <li className="breadcrumb-item ">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Contact
          </li>
        </ol>
      </nav>
      <h1 className="p-3">Welcome To Contact Page</h1>
      <Footer />
    </>
  );
};

export default Contact;
