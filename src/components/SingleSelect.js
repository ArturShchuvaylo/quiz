import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SingleSelect = ({ question, handleOptionClick }) => {
  const { t, i18n } = useTranslation();

  const lng = {
    English: "en",
    Spanish: "es",
    French: "fr",
    German: "de",
  };
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <Link className="link" to={question.next} key={option}>
          <button
            onClick={() => {
              i18n.changeLanguage(lng[option]);
              handleOptionClick(option);
            }}
            className="btn btn-option"
            key={option}
          >
            {t(`questions.question-${question.order}.option-${index + 1}`)}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default SingleSelect;
