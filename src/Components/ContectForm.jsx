import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactUs = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API call)
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form after submission
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{ color: "#2c3e50" }}>
        Contact Us
      </h1>

      <div className="row">
        <div className="col-md-6">
          <h4>Get in Touch</h4>
          <p>
            If you have any questions or need further information, feel free to
            contact us via the form below.
          </p>
          <p>
            <strong>Phone:</strong> +91 1234567890
          </p>
          <p>
            <strong>Email:</strong> info@pbscollage.edu
          </p>
          <p>
            <strong>Address:</strong> PBS College, Banka, Bihar, India
          </p>
        </div>

        <div className="col-md-6">
          <h4>Contact Form</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
