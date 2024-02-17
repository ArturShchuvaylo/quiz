import { Link } from "react-router-dom";

const SingleSelectImage = ({ question }) => {
  return (
    <div className="vertical-options">
      {question.options.map((option, index) => (
        <Link to={question.next} key={option} className="link">
          <div className="vertical-card">
            <div className="vertical-card-icon">{question.icons[index]}</div>
            <div className="vertical-card-title">{option}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SingleSelectImage;
