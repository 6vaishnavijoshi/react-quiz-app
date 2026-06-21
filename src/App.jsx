import { useState } from "react";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const questions = [
    {
      question: "What is React?",
      options: [
        "Java",
        "Python",
        "JavaScript Library",
        "C++",
      ],
      answer: "JavaScript Library",
    },

    {
      question: "Who developed React?",
      options: [
        "Google",
        "Facebook",
        "Microsoft",
        "Amazon",
      ],
      answer: "Facebook",
    },

    {
      question: "Which hook is used for state?",
      options: [
        "useEffect",
        "useState",
        "useRef",
        "useMemo",
      ],
      answer: "useState",
    },
  ];

  const checkAnswer = (option) => {
    if (selectedAnswer) return;

    setSelectedAnswer(option);

    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer("");
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer("");
  };

  if (currentQuestion >= questions.length) {
    return (
      <div className="app">
        <div className="quiz-card">
          <h1>🎉 Quiz Completed!</h1>

          <h2>
            Final Score: {score} / {questions.length}
          </h2>

          <button
            className="restart-btn"
            onClick={restartQuiz}
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="quiz-card">
        <h1>React Quiz App</h1>

        <h2>
          {questions[currentQuestion].question}
        </h2>

        {questions[currentQuestion].options.map(
          (option) => (
            <button
              key={option}
              className="option-btn"
              onClick={() =>
                checkAnswer(option)
              }
            >
              {option}
            </button>
          )
        )}

        <p>
          Selected Answer:
          {selectedAnswer || " None"}
        </p>

        <h3 className="score">
          Score: {score}
        </h3>

        <button
          className="next-btn"
          onClick={nextQuestion}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;