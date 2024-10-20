import React from "react";

function ViewAttendance() {
  const attendanceData = [
    { studentId: 1, name: "Alice", totalClasses: 50, attended: 45 },
    { studentId: 2, name: "Bob", totalClasses: 50, attended: 40 },
    { studentId: 3, name: "Charlie", totalClasses: 50, attended: 42 },
  ];

  return (
    <div className="container mt-4">
      <h2 className="h4 mb-3">View Attendance</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Total Classes</th>
            <th>Attended</th>
            <th>Attendance Percentage</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((data) => (
            <tr key={data.studentId}>
              <td>{data.name}</td>
              <td>{data.totalClasses}</td>
              <td>{data.attended}</td>
              <td>{((data.attended / data.totalClasses) * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAttendance;
