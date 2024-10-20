import React from "react";

function ExaminationManagement() {
  const examData = [
    {
      examId: 1,
      name: "Midterm Exam",
      date: "2024-11-01",
      course: "Data Structures",
    },
    {
      examId: 2,
      name: "Final Exam",
      date: "2024-12-20",
      course: "Operating Systems",
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="h4 mb-3">Examination Management</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Exam Name</th>
            <th>Date</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {examData.map((exam) => (
            <tr key={exam.examId}>
              <td>{exam.name}</td>
              <td>{exam.date}</td>
              <td>{exam.course}</td>
              <td>
                <button className="btn btn-primary">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExaminationManagement;
