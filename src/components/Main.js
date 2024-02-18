import { Outlet } from "react-router-dom";
import Progress from "./Progress";

function Main({ questions }) {
  return (
    <main className="main">
      <Progress questions={questions} />
      <Outlet />
    </main>
  );
}

export default Main;
