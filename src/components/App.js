import React, { Suspense, useEffect, useReducer } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { reducer, initialState } from "../reducers/reducer.js";
import fetchData from "../api/fetchData";
import Main from "./Main";
import Question from "./Question";
import Loader from "./Loader";
import Spinner from "./Spinner";
import Email from "./Email";
import Error from "./Error";
import FinishPage from "./FinishPage";
import "../i18n.js";

function App() {
  const [{ questions, status, answers }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const storedState = localStorage.getItem("quizState");
    if (storedState !== null) {
      dispatch({
        type: "localStorageReceived",
        payload: JSON.parse(storedState),
      });
    } else {
      fetchData()
        .then((data) => dispatch({ type: "dataReceived", payload: data }))
        .catch((error) => dispatch({ type: "dataFailed", payload: error }));
    }
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      localStorage.setItem(
        "quizState",
        JSON.stringify({ questions, status, answers })
      );
    }
  }, [questions, status, answers]);

  const renderQuestionRoutes = questions.map((question) => (
    <Route
      key={question.path}
      path={question.path}
      element={<Question question={question} dispatch={dispatch} />}
    />
  ));

  return (
    <div className="app">
      <Suspense fallback={<Loader />}>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "active" && (
          <Router>
            <Routes>
              <Route path="/" element={<Main questions={questions} />}>
                <Route path="/" element={<Navigate to="/quiz/1" />} />
                {renderQuestionRoutes}
              </Route>
              <Route path="/spinner" element={<Spinner />} />
              <Route path="/email" element={<Email dispatch={dispatch} />} />
              <Route
                path="/finish"
                element={<FinishPage dispatch={dispatch} answers={answers} />}
              />
              <Route path="*" element={<Error />} />
            </Routes>
          </Router>
        )}
      </Suspense>
    </div>
  );
}

export default App;
