import React from "react";
import "./Footer.css";
import new_logo from "../assets/new_logo.png";
import { BiLogoFacebook } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-top-content">
              <div className="row">
                {/* Footer Info Section */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 footer-info">
                  <div className="footer-logo">
                    <Link to="/">
                      <img src={new_logo} alt="PBS College Banka Logo" />
                    </Link>
                  </div>
                  <p className="footer-intro" style={{ textAlign: "justify" }}>
                    The PBS College Banka is a world-class educational institute
                    with amenities and facilities at par with the best in the
                    world. It is the
                    <Link to="/"> best College in Bihar</Link>. This
                    international school has built age-appropriate
                    infrastructure for students of classes Pre-Nursery onwards.
                    The school envisions academic excellence with a global edge,
                    setting new benchmarks and continuously raising standards.
                  </p>
                </div>

                {/* Footer Useful Links */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 footer-menu">
                  <div className="footer-title">
                    <h4>Useful Links</h4>
                  </div>
                  <div className="footer-link-menu">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/Admissions">Admissions</Link>
                      </li>
                      <li>
                        <Link to="/Academics">Academics</Link>
                      </li>
                      <li>
                        <Link to="/Curriculum">Academics Curriculum</Link>
                      </li>
                      <li>
                        <Link to="/Disclosures">
                          CBSE Mandatory Disclosures
                        </Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link to="/Infrastructure">Infrastructure</Link>
                      </li>
                      <li>
                        <Link to="/About">About Us</Link>
                      </li>
                      <li>
                        <Link to="/Terms">Terms</Link>
                      </li>
                      <li>
                        <Link to="/Blog">Blog</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Location Section */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 lastest-news">
                  <div className="footer-title">
                    <h4>Our Location</h4>
                  </div>
                  <div className="lastest-news-list">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.6768952286607!2d77.37632212403587!3d28.57946356961486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5888a8d97c5%3A0x34f6eae7582c6879!2sLPS+Global+School!5e0!3m2!1sen!2sin!4v1536176170737"
                      width="100%"
                      height="350"
                      frameBorder="0"
                      style={{ border: 0 }}
                      allowFullScreen
                      aria-hidden="false"
                      title="PBS College Banka Map"
                    ></iframe>
                  </div>
                </div>

                {/* Contact Us Section */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 footer-contact">
                  <div className="footer-title">
                    <h4>Contact Us</h4>
                  </div>
                  <ul>
                    <li>
                      <i className="la la-phone"></i>
                      <span>
                        Call us: <a href="tel:+916386898043">+91-6386898043</a>{" "}
                        <br />
                        +91-6386898043
                      </span>
                    </li>
                    <li>
                      <i className="la la-map-marker"></i>
                      <span>
                        PBS College Banka, Bihar.
                        <br />
                        D-196/2, Banka, Bihar, India
                      </span>
                    </li>
                    <li>
                      <i className="la la-envelope"></i>
                      <span>
                        <Link to="mailto:himanshudwivedi9157@gmail.com">
                          himanshudwivedi9157@gmail.com
                        </Link>
                      </span>
                    </li>
                    <li>
                      <div className="socials">
                        <ul>
                          <li>
                            <Link to="/">
                              <BiLogoFacebook />
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <BiLogoFacebook />
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <BiLogoFacebook />
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <BiLogoFacebook />
                            </Link>
                          </li>
                          {/* Add other social media icons here */}
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-content">
              <div className="copyright">
                Copyright © 2025 <Link to="/">PBS College Banka in Bihar</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
