import React, { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

function Quiz() {
    const [userAnswers, setUsersAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizComplete = activeQuestionIndex === QUESTIONS.length;
    
    const handleSelectAnswer = useCallback((answer) => {
        setUsersAnswers((prevState) => {
            return [...prevState, answer];
        });
    }, []);

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null),
        [handleSelectAnswer]
    );

    if (quizComplete) {
        return (
            <Summary
                userAnswers={userAnswers}
            />
        );
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index = {activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}

export default Quiz;
