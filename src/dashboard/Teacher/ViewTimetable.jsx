import React from "react";

function ViewTimetable() {
  const timetable = [
    { day: "Monday", time: "9:00 AM - 10:30 AM", course: "Data Structures" },
    {
      day: "Tuesday",
      time: "11:00 AM - 12:30 PM",
      course: "Operating Systems",
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="h4 mb-3">View Timetable</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {timetable.map((slot, index) => (
            <tr key={index}>
              <td>{slot.day}</td>
              <td>{slot.time}</td>
              <td>{slot.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewTimetable;
