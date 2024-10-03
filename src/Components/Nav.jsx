import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import new_logo from "../assets/lps_web_logo.png";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/">
            <img src={new_logo} alt="LPS Global School" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/About"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Academics"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Department
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Curriculum"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Activity
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Gallery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="//Infrastructure"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Alumni
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Careers"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Faculity
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
