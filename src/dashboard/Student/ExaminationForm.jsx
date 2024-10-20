// ExaminationForm.jsx
import React, { useState } from "react";

function ExaminationForm() {
  // State to hold form data
  const [formData, setFormData] = useState({
    subject1: "",
    subject2: "",
    subject3: "",
    attendance: "",
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
    console.log("Form submitted:", formData);
    alert("Examination form submitted successfully!");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Examination Form</h2>
      <form className="p-4 border rounded bg-white" onSubmit={handleSubmit}>
        {/* Subject 1 */}
        <div className="mb-3">
          <label htmlFor="subject1" className="form-label">
            Subject 1
          </label>
          <input
            type="text"
            className="form-control"
            id="subject1"
            name="subject1"
            value={formData.subject1}
            onChange={handleChange}
            required
          />
        </div>

        {/* Subject 2 */}
        <div className="mb-3">
          <label htmlFor="subject2" className="form-label">
            Subject 2
          </label>
          <input
            type="text"
            className="form-control"
            id="subject2"
            name="subject2"
            value={formData.subject2}
            onChange={handleChange}
            required
          />
        </div>

        {/* Subject 3 */}
        <div className="mb-3">
          <label htmlFor="subject3" className="form-label">
            Subject 3
          </label>
          <input
            type="text"
            className="form-control"
            id="subject3"
            name="subject3"
            value={formData.subject3}
            onChange={handleChange}
            required
          />
        </div>

        {/* Attendance */}
        <div className="mb-3">
          <label htmlFor="attendance" className="form-label">
            Attendance Percentage
          </label>
          <input
            type="number"
            className="form-control"
            id="attendance"
            name="attendance"
            value={formData.attendance}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-success w-100">
          Submit Examination Form
        </button>
      </form>
    </div>
  );
}

export default ExaminationForm;
