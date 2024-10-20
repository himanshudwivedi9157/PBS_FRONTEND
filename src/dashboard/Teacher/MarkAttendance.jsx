import React, { useState } from "react";

function MarkAttendance() {
  const [students, setStudents] = useState([
    { studentId: 1, name: "Alice", present: false },
    { studentId: 2, name: "Bob", present: false },
    { studentId: 3, name: "Charlie", present: false },
  ]);

  const handleAttendanceChange = (studentId) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.studentId === studentId
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  return (
    <div className="container mt-4">
      <h2 className="h4 mb-3">Mark Attendance</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Present</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.studentId}>
              <td>{student.name}</td>
              <td>
                <input
                  type="checkbox"
                  checked={student.present}
                  onChange={() => handleAttendanceChange(student.studentId)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary mt-3">Submit Attendance</button>
    </div>
  );
}

export default MarkAttendance;
