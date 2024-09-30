import React, { useState } from "react";
import "./AdmissionForm.css";
import addmision_img from "../assets/home2-signup-background.jpg";

const AdmissionForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    motherName: "",
    fatherName: "",
    address: "",
    gender: "",
    state: "",
    city: "",
    dob: "",
    pincode: "",
    course: "",
    email: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just logging the form data
    console.log("Form Data Submitted:", formData);

    // You can send this data to your backend
    // Example: axios.post('/api/form', formData);
  };

  return (
    <>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src={addmision_img}
                      alt="Sample photo"
                      className="img-fluid"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        borderTopLeftRadius: ".25rem",
                        borderBottomLeftRadius: ".25rem",
                      }}
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">
                        Student Registration Form
                      </h3>

                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              className="form-control form-control-lg"
                              placeholder="First name"
                            />
                          </div>
                          <div className="col-md-6 mb-4">
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              className="form-control form-control-lg"
                              placeholder="Last name"
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <input
                              type="text"
                              name="motherName"
                              value={formData.motherName}
                              onChange={handleChange}
                              className="form-control form-control-lg"
                              placeholder="Mother's name"
                            />
                          </div>
                          <div className="col-md-6 mb-4">
                            <input
                              type="text"
                              name="fatherName"
                              value={formData.fatherName}
                              onChange={handleChange}
                              className="form-control form-control-lg"
                              placeholder="Father's name"
                            />
                          </div>
                        </div>

                        <div className="mb-4">
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="form-control form-control-lg"
                            placeholder="Address"
                          />
                        </div>

                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                          <h6 className="mb-0 me-4">Gender: </h6>
                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              value="Female"
                              checked={formData.gender === "Female"}
                              onChange={handleChange}
                            />
                            <label className="form-check-label">Female</label>
                          </div>
                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              value="Male"
                              checked={formData.gender === "Male"}
                              onChange={handleChange}
                            />
                            <label className="form-check-label">Male</label>
                          </div>
                          <div className="form-check form-check-inline mb-0">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              value="Other"
                              checked={formData.gender === "Other"}
                              onChange={handleChange}
                            />
                            <label className="form-check-label">Other</label>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <select
                              name="state"
                              value={formData.state}
                              onChange={handleChange}
                              className="form-control form-control-lg"
                            >
                              <option value="">State</option>
                              <option value="State1">State 1</option>
                              <option value="State2">State 2</option>
                            </select>
                          </div>
                          <div className="col-md-6 mb-4">
                            <select
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                              className="form-control form-control-lg"
                            >
                              <option value="">City</option>
                              <option value="City1">City 1</option>
                              <option value="City2">City 2</option>
                            </select>
                          </div>
                        </div>

                        <div className="mb-4">
                          <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            className="form-control form-control-lg"
                            placeholder="DOB"
                          />
                        </div>

                        <div className="mb-4">
                          <input
                            type="text"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleChange}
                            className="form-control form-control-lg"
                            placeholder="Pincode"
                          />
                        </div>

                        <div className="mb-4">
                          <input
                            type="text"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            className="form-control form-control-lg"
                            placeholder="Course"
                          />
                        </div>

                        <div className="mb-4">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control form-control-lg"
                            placeholder="Email ID"
                          />
                        </div>

                        <div className="d-flex justify-content-end pt-3">
                          <button
                            type="reset"
                            className="btn btn-light btn-lg"
                            onClick={() => setFormData({})}
                          >
                            Reset all
                          </button>
                          <button
                            type="submit"
                            className="btn btn-warning btn-lg ms-2"
                          >
                            Submit form
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdmissionForm;
