import { Link } from "react-router-dom";

const SingleSelectImage = ({ question }) => {
  return (
    <div className="vertical-options">
      {question.options.map((option) => (
        <Link to={question.next} className="link">
          <div className="vertical-card">
            <div className="vertical-card-icon">{1}</div>
            <div className="vertical-card-title">{option}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SingleSelectImage;