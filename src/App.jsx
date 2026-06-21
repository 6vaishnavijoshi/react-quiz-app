import { useState } from "react";

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
      <div>
        <h1>🎉 Quiz Completed!</h1>

        <h2>
          Final Score: {score} / {questions.length}
        </h2>

        <button onClick={restartQuiz}>
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>React Quiz App</h1>

      <h2>
        {questions[currentQuestion].question}
      </h2>

      {questions[currentQuestion].options.map(
        (option) => (
          <div key={option}>
            <button
              onClick={() =>
                checkAnswer(option)
              }
            >
              {option}
            </button>
          </div>
        )
      )}

      <p>
        Selected Answer:
        {selectedAnswer || " None"}
      </p>

      <h3>Score: {score}</h3>

      <button onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
}

export default App;