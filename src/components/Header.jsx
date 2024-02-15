import React from 'react'
import quizLogo from '../assets/quiz-logo.png'
function Header() {
  return (
    <header>
        <img src={quizLogo} alt='quiz logo'/>
        <h1>React Quiz</h1>
    </header>
  )
}

export default Header