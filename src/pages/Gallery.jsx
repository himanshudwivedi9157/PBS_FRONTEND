import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import Gallery from "../Components/Gallery.jsx";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero.jsx";

const GalleryPage = () => {
  return (
    <>
      <>
        <Navbar />
        <nav
          style={{ "--bs-breadcrumb-divider": "'>'" }}
          aria-label="breadcrumb"
        >
          <ol className="breadcrumb ">
            <li className="breadcrumb-item ">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Gallery
            </li>
          </ol>
        </nav>

        <Gallery />

        <Footer />
      </>
    </>
  );
};

export default GalleryPage;
