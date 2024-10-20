// RegistrationForm.jsx
import React, { useState } from "react";

function RegistrationForm() {
  // State to hold form data
  const [formData, setFormData] = useState({
    studentName: "",
    studentID: "",
    course: "",
    semester: "",
    email: "",
    phone: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration form submitted:", formData);
    alert("Registration form submitted successfully!");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Registration Form</h2>
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

        {/* Semester */}
        <div className="mb-3">
          <label htmlFor="semester" className="form-label">
            Semester
          </label>
          <select
            className="form-select"
            id="semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            required
          >
            <option value="">Select Semester</option>
            <option value="1st Semester">1st Semester</option>
            <option value="2nd Semester">2nd Semester</option>
            <option value="3rd Semester">3rd Semester</option>
            <option value="4th Semester">4th Semester</option>
            <option value="5th Semester">5th Semester</option>
            <option value="6th Semester">6th Semester</option>
            <option value="7th Semester">7th Semester</option>
            <option value="8th Semester">8th Semester</option>
          </select>
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
          Submit Registration
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
