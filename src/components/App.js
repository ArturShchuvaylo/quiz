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
  answers: [],
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "dataReceived":
      return {
        ...state,
        questions: payload,
        status: "active",
      };

    case "localStorageReceived":
      return {
        ...state,
        questions: payload.questions,
        status: "active",
        answers: payload.answers,
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    case "answerAdded":
      const { order, title, type, answer } = payload;
      const existingAnswerIndex = state.answers.findIndex(
        (item) => item.order === order
      );
      if (existingAnswerIndex !== -1) {
        const updatedAnswers = [...state.answers];
        updatedAnswers[existingAnswerIndex] = { order, title, type, answer };
        return {
          ...state,
          answers: updatedAnswers,
        };
      } else {
        return {
          ...state,
          answers: [...state.answers, { order, title, type, answer }],
        };
      }

    case "quizRetaken":
      return {
        ...state,
        status: "active",
        answers: [],
      };
    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, answers } = state;

  useEffect(() => {
    const storedState = localStorage.getItem("quizState");
    const isEmpty = JSON.parse(storedState).questions.length;
    if (isEmpty) {
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
    localStorage.setItem("quizState", JSON.stringify(state));
  }, [state]);

  const renderQuestionRoutes = questions.map((question) => (
    <Route
      key={question.path}
      path={question.path}
      element={<Question question={question} dispatch={dispatch} />}
    />
  ));

  const handleRetake = () => {
    localStorage.removeItem("quizState");
    dispatch({ type: "quizRetaken" });
  };

  return (
    <div className="app">
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
              element={<Finish handleRetake={handleRetake} answers={answers} />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
