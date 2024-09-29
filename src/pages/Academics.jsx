import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Academics = () => {
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
      <h1 className="p-3">Welcome To Academics Page</h1>
      <Footer />
    </>
  );
};

export default Academics;
