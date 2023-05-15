import './App.css';
import { useState } from 'react';
import { useContext } from 'react';
import AnswersContext from './components/answerContext';

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


  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState([]);


  const { addCorrectAnswer } = useContext(AnswersContext);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers([
        ...correctAnswers,
        questions[currentQuestion].questionText,
      ]);
      addCorrectAnswer(questions[currentQuestion].questionText);
      setScore(score + 1);
      
    }

    const nextQuestion = currentQuestion + 1
    
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const refresh = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }

  return (
    <AnswersContext.Provider
      value={{
        correctAnswers,
        addCorrectAnswer: (answer) =>
          setCorrectAnswers([...correctAnswers, answer]),
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
                <div className='answer-text-wrapper'>
                  <p className='answer-text'>{item.answerText}</p>
                  <button
                    onClick={() => handleAnswerOptionClick(item.isCorrect)}>
                    {/* {item.answerText} */}Select answer
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
