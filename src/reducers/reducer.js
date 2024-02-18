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
      console.log(payload);
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

export { reducer, initialState };
