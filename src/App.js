import './App.css';
import { useState } from 'react';
import { useContext } from 'react';
import AnswersContext from './components/answerContext';
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentQuestion,
  setScore,
  setShowScore,
  setCorrectAnswers,
  addCorrectAnswer,
  resetQuiz,
} from "./actions/actions";

function App() {

  const questions = [
    {
      questionText:
        "Which country sent the Statue of Liberty to the USA as a gift?",
      answerOptions: [
        { answerText: "France", isCorrect: true },
        { answerText: "Ukraine", isCorrect: false },
        { answerText: "Poland", isCorrect: false },
        { answerText: "Germany", isCorrect: false },
      ],
    },
    {
      questionText: "What was the first capital city in America?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "Chicago", isCorrect: false },
        { answerText: "Philadelphia", isCorrect: true },
        { answerText: "San Francisco", isCorrect: false },
      ],
    },
    {
      questionText: "What is the longest river on the planet?",
      answerOptions: [
        { answerText: "Dnipro", isCorrect: false },
        { answerText: "Mississippi", isCorrect: false },
        { answerText: "Nile", isCorrect: true },
        { answerText: "Amazon", isCorrect: false },
      ],
    },
    {
      questionText: "How many states are in the USA?",
      answerOptions: [
        { answerText: "51", isCorrect: false },
        { answerText: "50", isCorrect: true },
        { answerText: "48", isCorrect: false },
        { answerText: "63", isCorrect: false },
      ],
    },
    {
      questionText: "In which city can you find the Golden Gate bridge?",
      answerOptions: [
        { answerText: "Paris", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "New York", isCorrect: false },
        { answerText: "San Francisco", isCorrect: true },
      ],
    },
  ];


  const dispatch = useDispatch();
  const { currentQuestion, score, showScore, correctAnswers } = useSelector(
    (state) => state.quiz
  );

  useEffect(() => {
    dispatch(resetQuiz());
  }, []);


  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      dispatch(
        setCorrectAnswers([
          ...correctAnswers,
          questions[currentQuestion].questionText,
        ])
      );
      dispatch(addCorrectAnswer(questions[currentQuestion].questionText));
      dispatch(setScore(score + 1));
      
    }

    const nextQuestion = currentQuestion + 1
    
    if (nextQuestion < questions.length) {
      dispatch(setCurrentQuestion(nextQuestion));
    } else {
      dispatch(setShowScore(true));
    }
  }

  const refresh = () => {
    dispatch(resetQuiz());
  }

  return (
    <AnswersContext.Provider
      value={{
        correctAnswers,
        addCorrectAnswer: (answer) => dispatch(addCorrectAnswer(answer)),
      }}
    >
      <div className="app">
        {showScore ? (
          <div className="score">
            <h2>Game over</h2>
            <div>
              Correct answers are {score} from {questions.length}
            </div>
            <button onClick={refresh}>Try again</button>
          </div>
        ) : (
          <div className="quiz">
            <h1>Quiz</h1>
            <div className="question">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span> / {questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer">
              {questions[currentQuestion].answerOptions.map((item) => (
                <div className="answer-text-wrapper">
                  <p className="answer-text">{item.answerText}</p>
                  <button
                    onClick={() => handleAnswerOptionClick(item.isCorrect)}
                  >
                    Select answer
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </AnswersContext.Provider>
  );
}

export default App;
