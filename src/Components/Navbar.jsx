import "./Navbar.css";
import { IoMdPhonePortrait } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import new_logo from "../assets/new_logo.png";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="header-top hidden-tablet-landscape">
          <div className="container">
            <div className="header-top-content display-flex">
              <div className="header-top-info" style={{ width: "50%" }}>
                <Link to="tel:09205358900" className="telephone">
                  <IoMdPhonePortrait /> Call us +91-6386898043 / +91 6386898043{" "}
                </Link>
                <Link to="mailto:info@lpsglobal.org" className="email">
                  <IoMail />
                  himanshudwivedi9157@gmail.com
                </Link>
              </div>
              <div className="header-top-account">
                <div className="header-login">
                  {" "}
                  <Link to="/" className="button1">
                    Virtual Tour
                  </Link>
                  {/* <marquee scrollamount="5" scrolldelay="40" onMouseOver="this.stop();" onMouseOut="this.start();" style="color:#fff; font-size:12px;">
						<a href="#en_addmission">Admission Open for the academic year 2023-24 from Pre-Nursery to XI.     Scholarships for students from 50k-1Lakh. </a>
					</marquee>   */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="header-bottom hidden-tablet-landscape"
          id="js-navbar-fixed"
        >
          <div className="container">
            <div className="header-bottom">
              <div className="header-bottom-content display-flex">
                <div className="logo">
                  <Link to="/">
                    <img src={new_logo} alt="LPS Global School" />
                  </Link>
                </div>
                <div className="menu-search display-flex">
                  <nav className="menu">
                    <div>
                      <ul className="menu-primary">
                        <li className="menu-item curent-menu-item"></li>
                        <li className="menu-item">
                          <Link to="/About">About</Link>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <Link to="/About">Core Philosophy </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/About">Mission &amp; Vision </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/About">Our Motto </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/About">Board of Management </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/About">School Emblem </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/About">Flag Bearers</Link>
                              <ul className="sub-menu">
                                <li className="menu-item">
                                  <Link to="/About">Vice Chairman </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/About">C.E.O </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/About">Principal </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item">
                              <Link to="/About">
                                From the Principal's Desk{" "}
                              </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/About">LPS Committees </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/About">Managing Committee </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/About">Annual Report </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <Link to="/Admissions">Admissions </Link>{" "}
                          <ul className="sub-menu">
                            {/* <li className="menu-item"><a href="https://forms.edunexttechnologies.com/studio/forms/lpsglobal/registrationform/" >Online Registration </a></li> */}
                            <li className="menu-item">
                              <Link to="/">Online Registration </Link>
                            </li>

                            <li className="menu-item">
                              <Link to="/">Parent Portal </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/">Admission Process </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/">Fee Structure </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/"> Fees Payment </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/"> Student Login </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <Link to="/Academics">Academics </Link>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <Link to="/Academics">Pre Primary</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Academics">Primary </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Academics">Middle</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Academics">Secondary </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Academics">Promotion Policy</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Academics">
                                Assessment &amp; Evaluation Policy{" "}
                              </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Academics">The Learning Model</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Academics">
                                School Holidays 2019-20
                              </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Academics">School Timings</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <Link to="/Curriculum">Curriculum </Link>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <Link to="/Curriculum">Clubs &amp; Hobbies </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Curriculum">Sports </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Curriculum">House System </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Curriculum">
                                Trips and Excursions{" "}
                              </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Curriculum">
                                Art &amp; Craft Studio{" "}
                              </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Curriculum">Dance &amp; Music </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Curriculum">Events</Link>
                              <ul className="sub-menu">
                                <li className="menu-item">
                                  <Link to="/Curriculum">
                                    School Assembly &amp; Special Assemblies{" "}
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/Curriculum">Monthly Report </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/Curriculum">Article </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item">
                              <Link to="/Curriculum">Workshops </Link>
                              <ul className="sub-menu">
                                <li className="menu-item">
                                  <Link to="/Curriculum">
                                    Workshops for Teachers{" "}
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link to="/Curriculum">
                                    Workshops for Students{" "}
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <Link to="/Gallery">Gallery </Link>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <Link to="/Gallery">Image </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Gallery">Walkthrough </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Gallery">Video Gallery </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <Link to="/Infrastructure">Infrastructure </Link>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <Link to="/Infrastructure">School Campus</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Infrastructure">
                                Smart Classrooms{" "}
                              </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Infrastructure">Library</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Infrastructure">Infirmary </Link>
                            </li>

                            <li className="menu-item">
                              <Link to="/Infrastructure">Transport</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Infrastructure">Laboratories </Link>
                            </li>
                          </ul>{" "}
                        </li>

                        <li className="menu-item">
                          <Link to="/Careers">Careers </Link>
                          <ul className="sub-menu"></ul>
                        </li>
                        <li className="menu-item">
                          <Link to="/Contact">Contact </Link>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <Link to="/Contact">Reach Us </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Contact">Feedback/Suggestion </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>

              <p align="center">
                <Link to="/" className="button1">
                  Online Registration
                </Link>

                <Link to="/" className="button1">
                  Student's Login
                </Link>

                <Link to="/" className="button1">
                  Online Fee Payment
                </Link>

                <Link to="/" className="button1">
                  Transfer Certificate
                </Link>
                <Link to="/" className="button1">
                  CBSE Inspection 2020
                </Link>
                <Link to="/" className="button1">
                  Mobile App Manual
                </Link>
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
