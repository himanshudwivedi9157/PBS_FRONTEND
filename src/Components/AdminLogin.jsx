import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/login",
        { email, password }
      );

      // Store email in localStorage if "Remember Me" is checked
      if (rememberMe) {
        localStorage.setItem("email", email);
      }

      // Store token and navigate to the dashboard
      localStorage.setItem("token", response.data.token);
      navigate("/login/admin/admin-dashboard"); // Update to match your URL structure
    } catch (error) {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Admin Login</h2>
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
        <div className="form-check mb-3 d-flex align-items-center">
          <input
            type="checkbox"
            className="form-check-input"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label className="form-check-label ms-2" htmlFor="rememberMe">
            Keep me logged in
          </label>
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

export default AdminLogin;
