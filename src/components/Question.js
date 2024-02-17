import Bubble from "./Bubble";
import MultipleSelect from "./MultipleSelect";
import SingleSelect from "./SingleSelect";
import SingleSelectImage from "./SingleSelectImage";
import Button from "./Button";
import { Link } from "react-router-dom";

function Question({ question }) {
  return (
    <div className="main">
      <div className="question-head">
        <h4>{question.title}</h4>
        <p>{question.subtitle}</p>
      </div>
      {question.type === "bubble" && <Bubble question={question} />}
      {question.type === "multiple-select" && (
        <MultipleSelect question={question} />
      )}
      {question.type === "single-select-image" && (
        <SingleSelectImage question={question} />
      )}
      {question.type === "single-select" && (
        <SingleSelect question={question} />
      )}
    </div>
  );
}

export default Question;
