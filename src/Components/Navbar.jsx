import "./Navbar.css";
import { IoMdPhonePortrait } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import new_logo from "../assets/lps_web_logo.png";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="header-top hidden-tablet-landscape">
          <div className="container">
            <div className="header-top-content display-flex">
              <div className="header-top-info" style={{ width: "50%" }}>
                <Link to="tel:6386898043" className="telephone">
                  <IoMdPhonePortrait /> Call us +91-6386898043 / +91 6386898043{" "}
                </Link>
                <Link
                  to="mailto:himanshudwivedi9157@gmail.com"
                  className="email"
                >
                  <IoMail />
                  himanshudwivedi9157@gmail.com
                </Link>
              </div>
              <div className="header-top-account">
                <div className="header-login">
                  {" "}
                  <Link to="/Ragister" className="button1">
                    Login
                  </Link>
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
                              <Link to="/">Admission Procedure </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/">Academic Calendar </Link>
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
                          <Link to="/Academics"> Department </Link>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <Link to="/Academics">Department of Physics</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Academics">Department of Hindi</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Academics">Department of English</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Academics">Department of Physics</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Academics">
                                Department of Chemistry
                              </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Academics">
                                Department of Economics
                              </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Academics">Department of Botany</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Academics">Department of Zoology</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Academics">
                                Department of Mathematics
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <Link to="/Curriculum">Activity</Link>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <Link to="/Curriculum">Academic Activity </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Curriculum">Sports </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Curriculum">Cultural Activities</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Curriculum">NCC </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Curriculum">
                                Extracurricular Activity
                              </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Curriculum">Best Practice </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Curriculum">Book Journal</Link>
                            </li>
                            {/* <li className="menu-item">
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
                            </li> */}
                          </ul>
                        </li>
                        <li className="menu-item">
                          <Link to="/Gallery">Gallery </Link>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <Link to="/Gallery">Image </Link>
                            </li>
                            {/* <li className="menu-item">
                              <Link to="/Gallery">Walkthrough </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Gallery">Video Gallery </Link>
                            </li> */}
                          </ul>
                        </li>
                        <li className="menu-item">
                          <Link to="/Infrastructure">Alumni</Link>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <Link to="/Infrastructure">
                                Alumni Registration
                              </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Infrastructure">Our Alumni </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Infrastructure">
                                Directory of Alumni
                              </Link>
                            </li>
                          </ul>{" "}
                        </li>

                        <li className="menu-item">
                          <Link to="/Careers">Facilities</Link>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <Link to="/Contact">Class Room </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Contact">Library </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Contact">Laboratories</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Contact">Infrastracture</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Contact">Safety and Security</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Contact">Other facility </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <Link to="/Contact">Contact </Link>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <Link to="/Contact">Reach Us </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Contact">Feedback </Link>
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

        <div className="hidden-tablet-landscape-up header-mobile">
          <div className="header-top-mobile">
            <div className="container-fluid">
              <div className="logo">
                <Link to="/">
                  <img src={new_logo} alt="LPS Global School" />
                </Link>
              </div>

              <button
                className="hamburger hamburger--spin hidden-tablet-landscape-up "
                id="toggle-icon"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
          <div className="au-nav-mobile">
            <nav className="menu-mobile">
              <div>
                <ul className="au-navbar-menu">
                  <li className="menu-item curent-menu-item">
                    <Link to="/">Home </Link>
                    <span className="+">
                      <i></i>
                    </span>
                  </li>
                  <li className="menu-item">
                    <Link to="/">About </Link>
                    <span className="arrow">
                      <i></i>
                    </span>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <Link to="/">Core Philosophy </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Mission &amp; Vision </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Our Motto </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Board of Management </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">School Emblem </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Flag Bearers</Link>
                        <span className="arrow">
                          <i></i>
                        </span>
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <Link to="/">Vice Chairman </Link>
                          </li>
                          <li className="menu-item">
                            <Link to="/">C.E.O </Link>
                          </li>
                          <li className="menu-item">
                            <Link to="/">Principal </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <Link to="/">From the Principal's Desk </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">LPS Committees </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Managing Committee </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Annual Report </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <Link to="/">Admissions </Link>
                    <span className="arrow">
                      <i></i>
                    </span>
                    <ul className="sub-menu">
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
                        <Link to="/">Student Login </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <Link to="/">Academics </Link>
                    <span className="arrow">
                      <i></i>
                    </span>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <Link to="/">Pre Primary</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Primary </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Middle</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Secondary </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Promotion Policy</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Assessment &amp; Evaluation Policy </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">The Learning Model</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">School Holidays 2019-20</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">School Timings</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item">
                    <Link to="/">Curriculum </Link>
                    <span className="arrow">
                      <i></i>
                    </span>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <Link to="/">Clubs &amp; Hobbies </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Sports </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">House System </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Trips and Excursions </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Art &amp; Craft Studio </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Dance &amp; Music </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Events</Link>
                        <span className="arrow">
                          <i></i>
                        </span>
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <Link to="/">
                              School Assembly &amp; Special Assemblies{" "}
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link to="/">Monthly Report </Link>
                          </li>
                          <li className="menu-item">
                            <Link to="/">Article </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Workshops </Link>
                        <span className="arrow">
                          <i></i>
                        </span>
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <Link to="/">Workshops for Teachers </Link>
                          </li>
                          <li className="menu-item">
                            <Link to="/">Workshops for Students </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <Link to="/">Gallery </Link>
                    <span className="arrow">
                      <i></i>
                    </span>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <Link to="/">Image </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Walkthrough </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Video Gallery </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <Link to="/">Infrastructure </Link>
                    <span className="arrow">
                      <i></i>
                    </span>
                    <ul className="sub-menu">
                      <li class="menu-item">
                        <Link to="/">School Campus</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Smart Classrooms </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Library</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Infirmary </Link>
                      </li>

                      <li className="menu-item">
                        <Link to="/">Transport</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Laboratories </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <Link to="/">Contact </Link>
                    <span class="arrow">
                      <i></i>
                    </span>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <Link to="/">Reach Us </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Feedback/Suggestion </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Career With Us </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="header-top">
            <div className="container-fluid">
              <div className="header-top-content display-flex">
                <div className="header-top-info">
                  <Link to="6386898043" class="telephone">
                    <i className="fas fa-mobile-alt"></i>Call us +91 6386898043
                    / +91 6386898043
                  </Link>
                  <Link to="himanshudwivedi9157@gmail.com" class="email">
                    <i className="far fa-envelope"></i>
                    himanshudwivedi9157@gmail.com
                  </Link>
                </div>
                <div className="header-top-account"></div>
              </div>
              <p align="center">
                <Link to="/" class="button1">
                  Online Registration
                </Link>

                <Link to="/" class="button1">
                  Student's Login
                </Link>

                <Link to="/" class="button1">
                  Online Fee Payment
                </Link>

                <Link to="/" class="button1">
                  Transfer Certificate
                </Link>
              </p>
            </div>
          </div>

          <div className="clear"></div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
