import React, { useState } from "react";
import "./Admission.css";
import icon_static from "../assets/icon-statistics-1.png";
import awrd_icon from "../assets/awardicon.png";

const Admission = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank You !! Form Submitted:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <>
      <section className="sign-up section-padding-large" id="en_addmission">
        <div className="container">
          <div className="sign-up-content">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 register-now">
                <p className="get-more">
                  We ensure all prospective parents enjoy a stress-free
                  application experience.{" "}
                </p>
                <h2 className="register-title">Admission Enquiry! </h2>
                <p>
                  At PBS College Bank, we hope that parents stay with us for
                  their child's entire academic journey. Each child who joins us
                  becomes a part of our ever growing and warm LPS Global family.
                  We have a simple admission procedure to admit your child.{" "}
                </p>
                <div className="statistics-block">
                  <ul>
                    <li>
                      <div className="icon">
                        <img src={icon_static} alt="LPS Global" />
                      </div>
                      <div className="info">
                        <span className="counterUp">2000 </span>
                        <span>Alumuniis - PBS Banka in Bihar </span>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <img src={awrd_icon} alt="LPS GLOBAL School Awards" />
                      </div>
                      <div className="info">
                        <span className="counterUp">4 </span>
                        <span>Awards - PBS College Banka in Bihar</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="sign-up-form">
                  <div className="form-heading">
                    <h3>ENQUIRE FOR ADMISSION</h3>
                    <p>
                      Kindly fill in the form and we'll respond at the earliest.{" "}
                    </p>
                  </div>
                  {/* 
                  <form method="POST" action="#">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <i className="fas fa-envelope"></i>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required=""
                      />
                    </div>

                    <div className="form-group">
                      <i className="fas fa-phone"></i>
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        placeholder="Your Phone"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <i className="fas fa-list "></i>
                      <input
                        type="text"
                        name="message"
                        id="message"
                        placeholder="Your Enquiry"
                        required=""
                      />
                    </div>
                    <input
                      type="submit"
                      className="submit"
                      value="Submit Request"
                    />
                  </form> */}

                  {/* form handling */}

                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        placeholder="Your Phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="message"
                        id="message"
                        placeholder="Your Enquiry"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <input
                      type="submit"
                      className="submit"
                      value="Submit Request"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admission;
