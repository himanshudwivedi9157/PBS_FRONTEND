import React from "react";

function ViewAssignments() {
  const assignments = [
    {
      assignmentId: 1,
      title: "Assignment 1",
      dueDate: "2024-10-10",
      submitted: 45,
    },
    {
      assignmentId: 2,
      title: "Assignment 2",
      dueDate: "2024-10-20",
      submitted: 42,
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="h4 mb-3">View Assignments</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Due Date</th>
            <th>Submitted</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment) => (
            <tr key={assignment.assignmentId}>
              <td>{assignment.title}</td>
              <td>{assignment.dueDate}</td>
              <td>{assignment.submitted}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAssignments;
