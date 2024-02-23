import React, { useRef } from "react";

function Answers({answers, selectedAnswer, answerState, onSelect}) {
    const shuffledAnswers = useRef();

    if(!shuffledAnswers.current){
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }
    return (
        <ul id="answers">
            {shuffledAnswers.current &&
                shuffledAnswers.current.map((answer) => {
                    let cssClass = "";
                    const isSelected =
                        selectedAnswer === answer;
                    if (answerState === "answered" && isSelected) {
                        cssClass = "selected";
                    }
                    if (
                        (answerState === "correct" ||
                            answerState === "wrong") &&
                        isSelected
                    ) {
                        cssClass = answerState;
                    }
                    return (
                        <li key={answer} className="answer">
                            <button
                                disabled={answerState !== ''}
                                className={cssClass}
                                onClick={() => onSelect(answer)}
                            >
                                {answer}
                            </button>
                        </li>
                    );
                })}
        </ul>
    );
}

export default Answers;
