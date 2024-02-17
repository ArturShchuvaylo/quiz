import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Bubble = ({ question }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const disable = selectedOptions.length === 0;

  return (
    <>
      <div className="options-bubble">
        {question.options.map((option, index) => (
          <div
            key={option}
            className={
              selectedOptions.includes(option)
                ? "btn btn-checked btn-circle "
                : "btn btn-circle"
            }
            onClick={() => handleOptionClick(option)}
          >
            <div className="bubble-container ">
              <div className="bubble-card">
                <div className="bubble-card-icon">{question.icons[index]}</div>
                <div className="bubble-card-title">{option}</div>
              </div>
              <label>
                <input
                  className="checkbox-input"
                  defaultChecked={selectedOptions.includes(option)}
                  type="checkbox"
                />
              </label>
            </div>
          </div>
        ))}
      </div>
      <Link to={question.next} className="link">
        <Button disable={disable} />
      </Link>
    </>
  );
};

export default Bubble;
