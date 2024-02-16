import React, { useEffect, useReducer } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import fetchData from "../api/fetchData";
import Main from "./Main";
import Question from "./Question";
import Loader from "./Loader";

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
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchData()
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed", payload: error }));
  }, []);

  console.log(questions);

  const renderQuestionRoutes = questions.map((question) => (
    <Route
      key={question.path}
      path={question.path}
      element={<Question question={question} />}
    />
  ));

  return (
    <div className="app">
      {status === "loading" && <Loader />}
      {status === "active" && (
        <Router>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="/" element={<Navigate to="/1" />} />
              {renderQuestionRoutes}
            </Route>
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
