import React, { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Email() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const navigate = useNavigate();

  const { t } = useTranslation();

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
        <h4>{t(`email.title`)}</h4>
        <p>{t(`email.subtitle`)}</p>
      </div>

      <div className="email-input-container">
        <input
          type="email"
          placeholder="email"
          className={isValidEmail ? "email-input" : "email-input invalid"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!isValidEmail && <div className="error-email">{t(`email.error`)}</div>}
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
