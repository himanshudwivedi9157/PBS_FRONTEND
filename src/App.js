import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics.jsx";
import Admissions from "./pages/Admissions.jsx";
import Curriculum from "./pages/Curriculum.jsx";
import Gallery from "./pages/Gallery.jsx";
import Infrastructure from "./pages/Infrastructure.jsx";
import Careers from "./pages/Careers.jsx";
import Contact from "./pages/Contact.jsx";
import Ragister from "./pages/Ragister.jsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Admissions" element={<Admissions />} />
          <Route path="/Academics" element={<Academics />} />
          <Route path="/Curriculum" element={<Curriculum />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Infrastructure" element={<Infrastructure />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Ragister" element={<Ragister />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
