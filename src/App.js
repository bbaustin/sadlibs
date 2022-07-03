import React, { useState } from 'react'
import WordPrompt from './components/WordPrompt'

function App() {
  const [isDarkMode, setIsDarkMode] = useState('false')

  const handleClick = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      <header>
        <h1>this is us</h1>
        <span className='moon' onClick={() => handleClick()}>
          {isDarkMode ? '🌝' : '🌚'}
        </span>
      </header>
      <WordPrompt />
    </div>
  )
}

export default App
