import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Spinner() {
  const [percentage, setPercentage] = useState(0);
  const navigate = useNavigate();

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
  }, []);

  return (
    <>
      <div className="spinner-container">
        <div className="spinner"></div>
        <div className="percentage">{percentage}%</div>
      </div>
      <p className="text-below"> Finding collections for you...</p>
    </>
  );
}

export default Spinner;
