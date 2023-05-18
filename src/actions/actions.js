export const SET_CURRENT_QUESTION = "SET_CURRENT_QUESTION";
export const SET_SCORE = "SET_SCORE";
export const SET_SHOW_SCORE = "SET_SHOW_SCORE";
export const SET_CORRECT_ANSWERS = "SET_CORRECT_ANSWERS";
export const ADD_CORRECT_ANSWER = "ADD_CORRECT_ANSWER";
export const RESET_QUIZ = "RESET_QUIZ";

export const setCurrentQuestion = (questionIndex) => {
  return {
    type: "SET_CURRENT_QUESTION",
    payload: questionIndex,
  };
};

export const setScore = (score) => {
  return {
    type: "SET_SCORE",
    payload: score,
  };
};

export const setShowScore = (showScore) => {
  return {
    type: "SET_SHOW_SCORE",
    payload: showScore,
  };
};

export const setCorrectAnswers = (correctAnswers) => {
  return {
    type: "SET_CORRECT_ANSWERS",
    payload: correctAnswers,
  };
};

export const addCorrectAnswer = (answer) => {
  return {
    type: "ADD_CORRECT_ANSWER",
    payload: answer,
  };
};

export const resetQuiz = () => {
  return {
    type: "RESET_QUIZ",
  };
};
