// src/components/StudentLogin.js

import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; // Import Link

const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/Aplicent/login",
        { email, password }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/login/student/student-dashboard");
    } catch (error) {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Student Login</h2>
      <form onSubmit={handleLogin} className="mt-4">
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
        {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}
      </form>
      <div className="mt-3 text-center">
        <Link to="/forgot-password" className="me-3">
          Forgot Password?
        </Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default StudentLogin;
