import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [studentId, setStudentId] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock authentication simulation
    if (studentId === "123456" && pin === "1234") {
      // Successful login, navigate to the dashboard
      navigate("/dashboard");
    } else {
      setError("Invalid Student ID or PIN. Please try again.");
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-page-content">
        <h2 className="login-page-title">Student Login</h2>
        {error && <p className="login-error">{error}</p>}
        <form className="login-form">
          <label>
            Student ID:
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </label>
          <label>
            PIN:
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
          </label>
          <button type="button" onClick={handleLogin} className="login-button">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
