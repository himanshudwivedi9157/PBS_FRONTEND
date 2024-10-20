import React, { useState } from "react";

function TCApplicationForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    studentID: "",
    course: "",
    semester: "",
    reason: "",
  });

  const [error, setError] = useState(""); // Error state for invalid semester

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); // Reset error message when typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const semester = parseInt(formData.semester);

    // Check if the semester is one of the even semesters: 2, 4, or 6
    if (![2, 4, 6].includes(semester)) {
      setError("Only students in even semesters (2, 4, 6) can apply for a TC.");
      return;
    }

    console.log("TC Application form submitted:", formData);
    alert("TC Application submitted successfully!");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Transfer Certificate (TC) Application Form</h2>
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

        {/* Semester (only even semesters allowed: 2, 4, 6) */}
        <div className="mb-3">
          <label htmlFor="semester" className="form-label">
            Semester
          </label>
          <input
            type="number"
            className="form-control"
            id="semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            required
          />
        </div>

        {/* Reason for TC */}
        <div className="mb-3">
          <label htmlFor="reason" className="form-label">
            Reason for TC
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

        {/* Error message for invalid semester */}
        {error && <div className="alert alert-danger">{error}</div>}

        {/* Submit Button */}
        <button type="submit" className="btn btn-success w-100">
          Submit TC Application
        </button>
      </form>
    </div>
  );
}

export default TCApplicationForm;
