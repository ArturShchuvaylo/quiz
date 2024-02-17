import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SingleSelectImage = ({ question }) => {
  const { t } = useTranslation();
  return (
    <div className="vertical-options">
      {question.options.map((option, index) => (
        <Link to={question.next} key={option} className="link">
          <div className="vertical-card">
            <div className="vertical-card-icon">{question.icons[index]}</div>
            <div className="vertical-card-title">
              {t(`questions.question-${question.order}.option-${index + 1}`)}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SingleSelectImage;
