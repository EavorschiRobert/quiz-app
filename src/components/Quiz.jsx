import React, { useState } from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";

function Quiz() {
    const [userAnswers, setUsersAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizComplete = activeQuestionIndex === QUESTIONS.length;
    const handleSelectAnswer = (answer) => {
        setUsersAnswers((prevState) => {
            return [...prevState, answer];
        });
    };
    
    if (quizComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="quiz completed" />
                <h2>Qiz is Completed!</h2>
            </div>
        );
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers &&
                        shuffledAnswers.map((answer) => (
                            <li key={answer} className="answer">
                                <button
                                    onClick={() => handleSelectAnswer(answer)}
                                >
                                    {answer}
                                </button>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default Quiz;
