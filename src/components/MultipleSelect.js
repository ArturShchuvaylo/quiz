import React, { useState } from "react";

const MultipleSelect = ({ question }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="options">
      {question.options.map((option) => (
        <div
          key={option}
          className="btn btn-option "
          onClick={() => handleOptionClick(option)}
        >
          <div className="container-checkbox">
            <p>{option}</p>
            <label className="checkbox-label">
              <input
                className="checkbox-input"
                checked={selectedOptions.includes(option)}
                type="checkbox"
              />
              <span className="checkbox-custom"></span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultipleSelect;
