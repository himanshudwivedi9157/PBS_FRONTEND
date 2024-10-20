import React from "react";
import { Link } from "react-router-dom";

function TeacherDashboard() {
  return (
    <div className="d-flex flex-column vh-100">
      <header className="bg-primary text-white p-4">
        <h1 className="h3">Teacher Dashboard</h1>
      </header>
      <div className="d-flex flex-grow-1">
        <nav className="bg-light border-end p-3" style={{ width: "250px" }}>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/login/teacher/teacher-profile" className="nav-link">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login/teacher/manage-course" className="nav-link">
                Manage Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login/teacher/mark-attendance" className="nav-link">
                Mark Attendance
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login/teacher/view-attendenca" className="nav-link">
                View Attendance
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login/teacher/examination-management"
                className="nav-link"
              >
                Examination Management
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login/teacher/view-assignment" className="nav-link">
                View Assignments
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login/teacher/upload-grades" className="nav-link">
                Upload Grades
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login/teacher/view-timetable" className="nav-link">
                View Timetable
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login/teacher/feedback-management"
                className="nav-link"
              >
                Feedback
              </Link>
            </li>
          </ul>
        </nav>
        <main className="flex-grow-1 p-4 bg-light">
          <h2 className="h4">Welcome to the Teacher Dashboard</h2>
          {/* Add your dashboard content here */}
        </main>
      </div>
    </div>
  );
}

export default TeacherDashboard;
