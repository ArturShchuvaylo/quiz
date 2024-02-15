import React, { useEffect } from "react";
import fetchData from "../api/fetchData";

function App() {
  useEffect(() => {
    fetchData().then((data) => console.log(data));
  }, []);

  return <div className="App">QUIZ</div>;
}

export default App;
