import React, { useState } from "react";

function UploadGrades() {
  const [grades, setGrades] = useState([
    { studentId: 1, name: "Alice", grade: "" },
    { studentId: 2, name: "Bob", grade: "" },
    { studentId: 3, name: "Charlie", grade: "" },
  ]);

  const handleGradeChange = (studentId, value) => {
    setGrades((prev) =>
      prev.map((student) =>
        student.studentId === studentId ? { ...student, grade: value } : student
      )
    );
  };

  return (
    <div className="container mt-4">
      <h2 className="h4 mb-3">Upload Grades</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((student) => (
            <tr key={student.studentId}>
              <td>{student.name}</td>
              <td>
                <input
                  type="text"
                  value={student.grade}
                  onChange={(e) =>
                    handleGradeChange(student.studentId, e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary mt-3">Submit Grades</button>
    </div>
  );
}

export default UploadGrades;
