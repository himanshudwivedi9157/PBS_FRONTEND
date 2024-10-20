// StudentDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

function StudentDashboard() {
  return (
    <div className="d-flex flex-column vh-100">
      <header className="bg-success text-white p-4">
        <h1 className="h3">Student Dashboard</h1>
      </header>
      <div className="d-flex flex-grow-1">
        <nav className="bg-light border-end p-3" style={{ width: "250px" }}>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/student/profile" className="nav-link">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/student/admission" className="nav-link">
                Admission Status
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login/student/payment-form" className="nav-link">
                Payments
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login/student/Examination-from" className="nav-link">
                Examination Form
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login/student/registraion-from" className="nav-link">
                Registration
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login/student/tcapplication-from" className="nav-link">
                TC Application
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login/student/clcapplication-from"
                className="nav-link"
              >
                CLC Application
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login/student/ccapplication-from" className="nav-link">
                CC Application
              </Link>
            </li>
          </ul>
        </nav>
        <main className="flex-grow-1 p-4 bg-light">
          <h2 className="h4">Welcome to the Student Dashboard</h2>
          <p>
            This dashboard provides you with all the necessary information and
            links you need after your admission.
          </p>
          {/* Add your dashboard content here */}
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Latest Updates</h5>
              <p className="card-text">
                Check your admission status, make payments, and apply for
                certificates.
              </p>
              <Link to="/student/admission" className="btn btn-primary">
                View Admission Status
              </Link>
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-light text-center py-3">
        <small>© 2024 pbs College Name. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default StudentDashboard;
