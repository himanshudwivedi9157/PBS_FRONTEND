// AdminDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="d-flex flex-column vh-100">
      <header className="bg-primary text-white p-4">
        <h1 className="h3">Admin Dashboard</h1>
      </header>
      <div className="d-flex flex-grow-1">
        <nav className="bg-light border-end p-3" style={{ width: "250px" }}>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/login/admin/user-management" className="nav-link">
                User Management
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login/admin/admission-management" className="nav-link">
                Admission Management
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login/admin/payment-management" className="nav-link">
                Payment Management
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login/admin/registeration-management"
                className="nav-link"
              >
                Registration Management
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login/admin/examination-management"
                className="nav-link"
              >
                Examination Management
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login/admin/tc-management" className="nav-link">
                TC Management
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login/admin/clc-management" className="nav-link">
                CLC Management
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login/admin/reportsandanalytics" className="nav-link">
                Reports & Analytics
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/settings" className="nav-link">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        <main className="flex-grow-1 p-4 bg-light">
          <h2 className="h4">Welcome to the Admin Dashboard</h2>
          {/* Add your dashboard content here */}
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
