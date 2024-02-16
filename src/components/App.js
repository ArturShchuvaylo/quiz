import React, { useEffect, useReducer } from "react";
import fetchData from "../api/fetchData";
import Main from "./Main";

const initialState = {
  questions: [],
  status: "loading", //'error','active','finished'
  currentIndex: 0,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "dataReceived":
      return {
        ...state,
        questions: payload,
        status: "active",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchData()
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed", payload: error }));
  }, []);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
