import Bubble from "./Bubble";
import MultipleSelect from "./MultipleSelect";
import SingleSelect from "./SingleSelect";
import SingleSelectImage from "./SingleSelectImage";
import { useTranslation } from "react-i18next";

function Question({ question, dispatch }) {
  const { t } = useTranslation();

  const handleOptionClick = (option) => {
    dispatch({
      type: "answerAdded",
      payload: {
        order: question.order,
        title: question.title,
        type: question.type,
        answer: option,
      },
    });
  };

  return (
    <div className="main">
      <div className="question-head">
        <h4>{t(`questions.question-${question.order}.title`)}</h4>
        <p>{t(`questions.question-${question.order}.subtitle`)}</p>
      </div>
      {question.type === "bubble" && (
        <Bubble question={question} handleOptionClick={handleOptionClick} />
      )}
      {question.type === "multiple-select" && (
        <MultipleSelect
          question={question}
          handleOptionClick={handleOptionClick}
        />
      )}
      {question.type === "single-select-image" && (
        <SingleSelectImage
          question={question}
          handleOptionClick={handleOptionClick}
        />
      )}
      {question.type === "single-select" && (
        <SingleSelect
          question={question}
          handleOptionClick={handleOptionClick}
        />
      )}
    </div>
  );
}

export default Question;
