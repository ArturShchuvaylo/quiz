import Bubble from "./Bubble";
import MultipleSelect from "./MultipleSelect";
import SingleSelect from "./SingleSelect";
import SingleSelectImage from "./SingleSelectImage";
import { useTranslation } from "react-i18next";

function Question({ question }) {
  const { t } = useTranslation();

  return (
    <div className="main">
      <div className="question-head">
        <h4>{t(`questions.question-${question.order}.title`)}</h4>
        <p>{t(`questions.question-${question.order}.subtitle`)}</p>
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
