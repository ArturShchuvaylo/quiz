import { Link } from "react-router-dom";

const SingleSelect = ({ question }) => {
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <Link className="link" to={question.next} key={option}>
          <button className="btn btn-option" key={option}>
            {option}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default SingleSelect;
