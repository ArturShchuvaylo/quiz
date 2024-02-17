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
import Spinner from "./Spinner";
import Email from "./Email";
import Error from "./Error";
import Finish from "./Finish";

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

  const renderQuestionRoutes = questions.map((question, index) => (
    <Route
      key={question.path}
      path={question.path}
      element={<Question question={question} />}
    />
  ));

  return (
    <div className="app">
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}

      {status === "active" && (
        <Router>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="/" element={<Navigate to="/quiz/1" />} />
              {renderQuestionRoutes}
            </Route>
            <Route path="/spinner" element={<Spinner />} />
            <Route path="/email" element={<Email />} />
            <Route path="/finish" element={<Finish />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
