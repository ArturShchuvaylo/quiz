import Options from "./Options";

function Question() {
  return (
    <div className="main">
      <div className="question-head">
        <h4>Title</h4>
        <p>Subtitle</p>
      </div>
      <div>
        <Options />
      </div>
    </div>
  );
}

export default Question;
