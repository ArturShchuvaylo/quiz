import React, { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Email() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    const isValid = validateEmail(email);
    setIsValidEmail(isValid);
    if (isValid) {
      navigate("/finish");
    }
  };

  const disable = email.length === 0;

  return (
    <div className="main">
      <div className="question-head">
        <h4>EMAIL</h4>
        <p>Enter your email to get full access</p>
      </div>

      <div className="email-input-container">
        <input
          type="email"
          placeholder="your email"
          className={isValidEmail ? "email-input" : "email-input invalid"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!isValidEmail && (
          <div className="error-email">Please enter a valid email address.</div>
        )}
      </div>

      <div
        // to="/finish"
        // className="link nex-button"
        onClick={() => handleSubmit()}
      >
        <Button disable={disable} />
      </div>
    </div>
  );
}

export default Email;
