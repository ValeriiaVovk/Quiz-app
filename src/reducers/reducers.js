import { combineReducers } from "redux";
import {
  SET_CURRENT_QUESTION,
  SET_SCORE,
  SET_SHOW_SCORE,
  SET_CORRECT_ANSWERS,
  ADD_CORRECT_ANSWER,
  RESET_QUIZ,
} from "../actions/actions";

const initialState = {
  currentQuestion: 0,
  score: 0,
  showScore: false,
  correctAnswers: [],
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.payload,
      };
    case SET_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    case SET_SHOW_SCORE:
      return {
        ...state,
        showScore: action.payload,
      };
    case SET_CORRECT_ANSWERS:
      return {
        ...state,
        correctAnswers: action.payload,
      };
    case ADD_CORRECT_ANSWER:
      return {
        ...state,
        correctAnswers: [...state.correctAnswers, action.payload],
      };
    case RESET_QUIZ:
      return initialState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  quiz: quizReducer,
});

export default rootReducer;
