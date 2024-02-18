import { useNavigate } from "react-router-dom";

function Progress({ questions }) {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  const toBack = currentPath.split("/")[2] - 1;

  const goBack = () => {
    if (toBack > 0) {
      navigate(`/quiz/${toBack}`);
    }
  };

  return (
    <header className="progress">
      <div className="progress-content">
        {/* <Link to="/1" className="link"> */}
        <div
          onClick={() => {
            goBack();
          }}
          className="arrow"
        >
          &#60;
        </div>
        {/* </Link> */}

        <p>
          <strong>{toBack + 1}</strong> / {questions.length}
        </p>
      </div>
      <progress max={questions.length} value={toBack + 1} />
    </header>
  );
}

export default Progress;
