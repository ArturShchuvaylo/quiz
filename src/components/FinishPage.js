import { Link } from "react-router-dom";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import { downloadCSV } from "../csv/convertToCSV";

function FinishPage({ dispatch, answers }) {
  const { t } = useTranslation();

  const handleRetake = () => {
    localStorage.removeItem("quizState");
    dispatch({ type: "quizRetaken" });
  };

  return (
    <div className="main">
      <div className="question-head">
        <h4>{t(`finish.title`)}</h4>
        <p> {t(`finish.subtitle`)}</p>
      </div>
      <div className="image-container">
        <img src="/checkmark.png" alt="Thank you" className="thank-you-image" />
      </div>
      <div
        onClick={() => downloadCSV(answers, "quiz")}
        className="download-container"
      >
        <div className="download-icon">
          <img src="/download.png" alt="Download" className="download-image" />
        </div>
        <p className="download-text">{t(`finish.download`)}</p>
      </div>
      <Link
        to="/quiz/1"
        onClick={() => handleRetake()}
        className="link nex-button"
      >
        <Button title="Retake quiz" />
      </Link>
    </div>
  );
}

export default FinishPage;
