import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const MultipleSelect = ({ question, handleOptionClick }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { t } = useTranslation();

  const handleClick = (option) => {
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
        {question.options.map((option, index) => (
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
              <p>
                {t(`questions.question-${question.order}.option-${index + 1}`)}
              </p>
              <label className="checkbox-label">
                <input
                  className="checkbox-input"
                  checked={selectedOptions.includes(option)}
                  type="checkbox"
                  onChange={() => {
                    handleClick(option);
                  }}
                />
                <span className="checkbox-custom"></span>
              </label>
            </div>
          </div>
        ))}
      </div>
      <Link
        to={question.next}
        onClick={() => handleOptionClick(selectedOptions)}
        className="link"
      >
        <Button disable={disable} />
      </Link>
    </>
  );
};

export default MultipleSelect;
