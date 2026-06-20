function App() {
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
        {questions[0].question}
      </h2>

      {questions[0].options.map(
        (option) => (
          <button key={option}>
            {option}
          </button>
        )
      )}

      <br />
      <br />

      <button>Next</button>
    </div>
  );
}

export default App;