import React, { useState } from 'react'
import * as Constants from '../assets/Constants'
import CompletedSadLib from './CompletedSadLib'

const WordPrompt = () => {
  const [unsubmittedAnswers, setUnsubmittedAnswers] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [submittedAnswers, setSubmittedAnswers] = useState({})
  const [errorMessage, setErrorMessage] = useState('')

  const checkSubmission = () => {
    if (!unsubmittedAnswers || !unsubmittedAnswers.trim()) {
      setErrorMessage('Please enter something!')
      //TODO: Consider special character matching with RegEx, etc.
    } else handleSubmit()
  }

  const handleSubmit = () => {
    let stagedAnswers = submittedAnswers
    let currentTag = Constants.QUESTIONS[currentQuestion].tag
    stagedAnswers[currentTag] = unsubmittedAnswers.toLowerCase() // Looks like --> currentTag: unsubmittedanswers
    setSubmittedAnswers(stagedAnswers)
    setUnsubmittedAnswers('')
    setErrorMessage('')
    setCurrentQuestion(currentQuestion + 1)
  }

  const handleChange = (event) => {
    setUnsubmittedAnswers(event.target.value)
  }

  return (
    <>
      {Object.keys(submittedAnswers).length === Constants.QUESTIONS.length ? (
        <CompletedSadLib submittedAnswers={submittedAnswers} />
      ) : (
        <section className='question-holder'>
          <h1>{Constants.QUESTIONS[currentQuestion].partOfSpeech}</h1>
          <small>{Constants.QUESTIONS[currentQuestion].explanation}</small>
          <input
            autoFocus
            onChange={handleChange}
            required
            type='text'
            value={unsubmittedAnswers}
          ></input>
          <button onClick={() => checkSubmission()}>Next 👉</button>
          <small style={{ color: 'var(--goldish)' }}>{errorMessage}</small>
        </section>
      )}
    </>
  )
}

export default WordPrompt
