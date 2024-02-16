import Button from "./Button";
import { Link } from "react-router-dom";

function Email() {
  return (
    <Link to="/finish" className="link">
      <div className="email">EMAIL!!!!</div>
      <Button />
    </Link>
  );
}

export default Email;
