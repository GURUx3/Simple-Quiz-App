import React, { useState } from "react";
import "./App.css";
import quizQuestions from "./data";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleQuizAnswer = (ans) => {
    if (quizQuestions[currentQuestionIndex].answer === ans) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // Quiz completed
      setCurrentQuestionIndex(-1); // Set to a value outside the bounds of questions array
    }
  };

  return (
    <div className="main">
      <p className="title">Quiz App</p>
      {currentQuestionIndex !== -1 ? (
        <div className="quizs-group">
          <div className="quiz-section">
            <div>
              <p className="question">
                {quizQuestions[currentQuestionIndex].question}
              </p>
            </div>
          </div>
          <div className="answers">
            {quizQuestions[currentQuestionIndex].options.map((quiz, index) => (
              <div
                className="answer"
                key={index}
                onClick={() => handleQuizAnswer(quiz)}
              >
                <p>{quiz}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="score">
          <p>
            Your Score is: {score > 10 ? "😁" : score > 3 ? "😑" : "😭"} { score } / { quizQuestions.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
