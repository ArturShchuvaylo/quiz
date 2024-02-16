import { Outlet } from "react-router-dom";
import Progress from "./Progress";

function Main() {
  return (
    <main className="main">
      <Progress />
      <Outlet />
    </main>
  );
}

export default Main;
