import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  // State for form data and error messages
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.email || !formData.password) {
      setErrors("Please fill in both fields.");
      return;
    }

    // Mock authentication logic (you can replace this with actual API call)
    if (
      formData.email === "admin@pbscollage.edu" &&
      formData.password === "password123"
    ) {
      setIsLoggedIn(true);
      setErrors("");
    } else {
      setErrors("Invalid email or password.");
    }
  };

  // If logged in, show success message
  if (isLoggedIn) {
    return (
      <div className="container text-center mt-5">
        <h1>Welcome, Admin!</h1>
        <p>You have successfully logged in.</p>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{ color: "#2c3e50" }}>
        Login
      </h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow">
            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Password Input */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Error Message */}
              {errors && <div className="alert alert-danger">{errors}</div>}
              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
