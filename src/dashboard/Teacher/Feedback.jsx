import React from "react";

function Feedback() {
  const feedbackData = [
    { feedbackId: 1, student: "Alice", feedback: "Great lecture!" },
    { feedbackId: 2, student: "Bob", feedback: "Need more examples in class." },
  ];

  return (
    <div className="container mt-4">
      <h2 className="h4 mb-3">Feedback</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Student</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map((feedback) => (
            <tr key={feedback.feedbackId}>
              <td>{feedback.student}</td>
              <td>{feedback.feedback}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Feedback;
