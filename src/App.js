import React, { useState } from 'react'
import WordPrompt from './components/WordPrompt'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [started, setStarted] = useState(false)

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      <header>
        <h1>
          Sad<span className='logo-text'>Libs</span>
        </h1>
        <span className='moon' onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? '🌝' : '🌚'}
        </span>
      </header>
      <main>
        {started ? (
          <WordPrompt />
        ) : (
          <section className='welcome'>
            <p>Welcome!</p>
            <p>
              <span style={{ color: 'var(--goldish)' }}>
                <span style={{ fontWeight: 800 }}>Sad</span>Libs
              </span>{' '}
              is a mad-lib style activity that allows you to generate your own
              monologue in the style of the over-emotional characters of NBC's
              hit series{' '}
              <span style={{ color: 'var(--goldish)', whiteSpace: 'nowrap' }}>
                This is <span style={{ fontWeight: 800 }}>Us</span>
              </span>
              .
            </p>
            <p>If you're ready to get sad, hit the button below!</p>
            <button onClick={() => setStarted(true)}>Let's emote 🥲</button>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
