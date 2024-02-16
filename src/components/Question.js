import MultipleSelect from "./MultipleSelect";
import SingleSelect from "./SingleSelect";
import SingleSelectImage from "./SingleSelectImage";

function Question({ question }) {
  return question ? (
    <div className="main">
      <div className="question-head">
        <h4>{question.title}</h4>
        <p>{question.subtitle}</p>
      </div>
      <MultipleSelect question={question} />
      <SingleSelectImage question={question} />
      <SingleSelect question={question} />
    </div>
  ) : null;
}

export default Question;
