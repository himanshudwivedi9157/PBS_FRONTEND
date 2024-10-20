// ApplicantDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

function ApplicantDashboard() {
  return (
    <div className="d-flex flex-column vh-100">
      <header className="bg-warning text-white p-4">
        <h1 className="h3">Applicant Dashboard</h1>
      </header>
      <div className="d-flex flex-grow-1">
        <nav className="bg-light border-end p-3" style={{ width: "250px" }}>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/applicant/profile" className="nav-link">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login/aplicant/application-status"
                className="nav-link"
              >
                Application Status
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login/aplicant/payment" className="nav-link">
                Payment
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login/aplicant/tc-application" className="nav-link">
                TC Application
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login/aplicant/clc-application" className="nav-link">
                CLC Application
              </Link>
            </li>
          </ul>
        </nav>
        <main className="flex-grow-1 p-4 bg-light">
          <h2 className="h4">Welcome to the Applicant Dashboard</h2>
          {/* Add your dashboard content here */}
        </main>
      </div>
    </div>
  );
}

export default ApplicantDashboard;
