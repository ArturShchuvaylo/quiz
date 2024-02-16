import { Link } from "react-router-dom";
import Button from "./Button";

function Finish() {
  return (
    <>
      <div className="finish">Thank you!!!</div>
      <Link to="/1" className="link">
        <Button title="Retake quiz" />
      </Link>
    </>
  );
}

export default Finish;
