// CharacterCertificateForm.jsx
import React, { useState } from "react";

function CharacterCertificateForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    studentID: "",
    course: "",
    academicYear: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Character Certificate form submitted:", formData);
    alert("Character Certificate Application submitted successfully!");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Character Certificate Application Form</h2>
      <form className="p-4 border rounded bg-white" onSubmit={handleSubmit}>
        {/* Student Name */}
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            className="form-control"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Student ID */}
        <div className="mb-3">
          <label htmlFor="studentID" className="form-label">
            Student ID
          </label>
          <input
            type="text"
            className="form-control"
            id="studentID"
            name="studentID"
            value={formData.studentID}
            onChange={handleChange}
            required
          />
        </div>

        {/* Course */}
        <div className="mb-3">
          <label htmlFor="course" className="form-label">
            Course
          </label>
          <input
            type="text"
            className="form-control"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>

        {/* Academic Year */}
        <div className="mb-3">
          <label htmlFor="academicYear" className="form-label">
            Academic Year
          </label>
          <input
            type="text"
            className="form-control"
            id="academicYear"
            name="academicYear"
            value={formData.academicYear}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
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

        {/* Phone Number */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-success w-100">
          Submit Character Certificate Application
        </button>
      </form>
    </div>
  );
}

export default CharacterCertificateForm;
