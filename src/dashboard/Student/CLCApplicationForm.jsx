// CLCApplicationForm.jsx
import React, { useState } from "react";

function CLCApplicationForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    studentID: "",
    course: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("CLC Application form submitted:", formData);
    alert("CLC Application submitted successfully!");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">
        College Leaving Certificate (CLC) Application Form
      </h2>
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

        {/* Reason for CLC */}
        <div className="mb-3">
          <label htmlFor="reason" className="form-label">
            Reason for CLC
          </label>
          <textarea
            className="form-control"
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-success w-100">
          Submit CLC Application
        </button>
      </form>
    </div>
  );
}

export default CLCApplicationForm;
