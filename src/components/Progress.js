import { useNavigate } from "react-router-dom";

const Progress = ({ questions }) => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const toBackIndex = parseInt(currentPath.split("/")[2]);
  const toBack = isNaN(toBackIndex) ? 0 : toBackIndex - 1;

  const goBack = () => {
    if (toBack > 0) {
      navigate(`/quiz/${toBack}`);
    }
  };

  return (
    <header className="progress">
      <div className="progress-content">
        <div
          onClick={() => {
            goBack();
          }}
          className="arrow"
        >
          &#60;
        </div>
        <p>
          <strong>{toBack + 1}</strong> / {questions.length}
        </p>
      </div>
      <progress max={questions.length} value={toBack + 1} />
    </header>
  );
};

export default Progress;
