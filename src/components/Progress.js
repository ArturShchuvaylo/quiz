import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Progress() {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  const toBack = Number(currentPath.split("/").join("")) - 1;
  const goBack = () => {
    if (toBack > 0) {
      navigate(`/${toBack}`);
    }
    return;
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
          <strong>2</strong> / 5
        </p>
      </div>
      <progress max={5} value={2} />
    </header>
  );
}

export default Progress;
