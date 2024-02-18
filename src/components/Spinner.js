import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Spinner() {
  const [percentage, setPercentage] = useState(0);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage < 100) {
          return prevPercentage + 1;
        } else {
          clearInterval(intervalId);

          setTimeout(() => {
            navigate("/email");
          }, 500);
          return prevPercentage;
        }
      });
    }, 50);

    return () => clearInterval(intervalId);
  }, [navigate]);

  return (
    <>
      <div className="spinner-container">
        <div className="spinner"></div>
        <div className="percentage">{percentage}%</div>
      </div>
      <p className="text-below"> {t(`spinner`)}</p>
    </>
  );
}

export default Spinner;
