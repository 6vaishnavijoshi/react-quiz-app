import { useState } from "react";

function App() {
  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const questions = [
    {
      question: "What is React?",
      options: [
        "Java",
        "Python",
        "JavaScript Library",
        "C++"
      ],
      answer: "JavaScript Library"
    },

    {
      question: "Who developed React?",
      options: [
        "Google",
        "Facebook",
        "Microsoft",
        "Amazon"
      ],
      answer: "Facebook"
    }
  ];

  return (
    <div>
      <h1>React Quiz App</h1>

      <h2>
        {questions[currentQuestion].question}
      </h2>

      {questions[currentQuestion].options.map(
        (option) => (
          <button key={option}>
            {option}
          </button>
        )
      )}

      <br />
      <br />

      <button
        onClick={() => {
          if (
            currentQuestion <
            questions.length - 1
          ) {
            setCurrentQuestion(
              currentQuestion + 1
            );
          }
        }}
      >
        Next
      </button>
    </div>
  );
}

export default App;