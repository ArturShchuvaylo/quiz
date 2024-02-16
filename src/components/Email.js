import Button from "./Button";
import { Link } from "react-router-dom";

function Email() {
  return (
    <div className="main">
      <div className="question-head">
        <h4>EMAIL</h4>
        <p>Enter your email to get full access</p>
      </div>

      <div className="email-input-container">
        <input type="email" placeholder="your email" className="email-input" />
      </div>

      <Link to="/finish" className="link nex-button">
        <Button />
      </Link>
    </div>
  );
}

export default Email;
