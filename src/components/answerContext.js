// import { createContext } from "react";

// export const AnswerContext = createContext([]);

import { createContext } from "react";

const AnswersContext = createContext({
  correctAnswers: [],
  addCorrectAnswer: () => {},
});

export default AnswersContext;
