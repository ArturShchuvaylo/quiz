import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const MultipleSelect = ({ question }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  console.log(selectedOptions);

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
      <div className="options">
        {question.options.map((option) => (
          <div
            key={option}
            className={
              selectedOptions.includes(option)
                ? "btn btn-checked btn-option"
                : "btn btn-option"
            }
            // onClick={() => {
            //   handleOptionClick(option);
            // }}
          >
            <div className="container-checkbox">
              <p>{option}</p>
              <label className="checkbox-label">
                <input
                  className="checkbox-input"
                  checked={selectedOptions.includes(option)}
                  type="checkbox"
                  onChange={() => {
                    handleOptionClick(option);
                  }}
                />
                <span className="checkbox-custom"></span>
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

export default MultipleSelect;
