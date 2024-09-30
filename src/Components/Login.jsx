import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.id]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", loginData);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", registerData);
  };

  return (
    <>
      <Navbar />
      <main className="container p-5 text-bg-dark ">
        <ul
          className="nav nav-pills nav-justified mb-3"
          id="ex1"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <Link
              className="nav-link active"
              id="tab-login"
              to="#pills-login"
              role="tab"
              aria-controls="pills-login"
              aria-selected="true"
            >
              Login
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link
              className="nav-link"
              id="tab-register"
              to="/Admissions"
              role="tab"
              aria-controls="pills-register"
              aria-selected="false"
            >
              Register
            </Link>
          </li>
        </ul>

        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form onSubmit={handleLoginSubmit}>
              <div className="text-center mb-3">
                <p>Sign in with:</p>
                {/* Social buttons */}
              </div>

              <p className="text-center">or:</p>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                />
                <label className="form-label" htmlFor="email">
                  Email or username
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />
                <label className="form-label" htmlFor="password">
                  Password
                </label>
              </div>

              {/* Add Remember me and Forgot password */}

              <button type="submit" className="btn btn-primary btn-block mb-4">
                Sign in
              </button>

              <div className="text-center">
                <p>
                  Not a member? <Link to="#pills-register">Register</Link>
                </p>
              </div>
            </form>
          </div>

          <div
            className="tab-pane fade"
            id="pills-register"
            role="tabpanel"
            aria-labelledby="tab-register"
          >
            <form onSubmit={handleRegisterSubmit}>
              <div className="text-center mb-3">
                <p>Sign up with:</p>
                {/* Social buttons */}
              </div>

              <p className="text-center">or:</p>

              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={registerData.name}
                  onChange={handleRegisterChange}
                  required
                />
                <label className="form-label" htmlFor="name">
                  Name
                </label>
              </div>

              {/* Add other fields similarly */}

              <button type="submit" className="btn btn-primary btn-block mb-3">
                Register
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
