import React, { useEffect, useState } from 'react'

function QuestionTimer({timeout, onTimeout}) {

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('SET TIMEOUT')
        const timer = setTimeout(() => {
            onTimeout();
        }, timeout);

        return () => {
            clearTimeout(timer);
        }
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log('SET INTERVAL')
        const interval = setInterval(() => {
            setRemainingTime(prevState => prevState-50);
        }, 50);

        return () => {
            clearInterval(interval);
        }
    }, []);


  return (
    <progress id="question-time" max={timeout} value={remainingTime}/>
  )
}

export default QuestionTimer