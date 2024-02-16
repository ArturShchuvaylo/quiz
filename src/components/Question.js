import SingleSelect from "./SingleSelect";

function Question({ question }) {
  return question ? (
    <div className="main">
      <div className="question-head">
        <h4>{question.title}</h4>
        <p>{question.subtitle}</p>
      </div>
      <SingleSelect question={question} />
    </div>
  ) : null;
}

export default Question;
