import { createContext, useContext, useReducer } from "react";

const QuestionsContext = createContext();

const SECS_PER_QUESTION = 15;

const initialState = {
  questions: [],
  numQuestions: 0,
  question: null,

  // loading, error, ready, active, finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  maxPossiblePoints: 0,
  highscore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      return {
        ...state,
        questions: action.payload,
        numQuestions: action.payload.length,
        maxPossiblePoints: action.payload.reduce(
          (acc, cur) => acc + cur.points,
          0
        ),
        status: "ready",
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    case "start":
      return {
        ...state,
        status: "active",
        question: state.questions.at(state.index),
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };

    case "newAnswer":
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === state.question.correctOption
            ? state.points + state.question.points
            : state.points,
      };

    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        question: state.questions.at(state.index),
      };

    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };

    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining <= 0 ? "finished" : state.status,
      };

    default:
      throw new Error("Action is unknown");
  }
}

function QuestionsProvider({ children }) {
  const [
    {
      questions,
      numQuestions,
      question,
      status,
      index,
      answer,
      points,
      maxPossiblePoints,
      highscore,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        numQuestions,
        question,
        status,
        index,
        answer,
        points,
        maxPossiblePoints,
        highscore,
        secondsRemaining,
        dispatch,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}

function useQuestions() {
  const context = useContext(QuestionsContext);
  if (context === undefined)
    throw new Error("useQuestions called outside the context provider");
  return context;
}

export { QuestionsProvider, useQuestions };
