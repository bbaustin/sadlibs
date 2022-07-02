import React, { useState } from 'react'
import * as Constants from '../assets/Constants'
import CompletedSadLib from './CompletedSadLib'

const WordPrompt = () => {
  const [unsubmittedAnswers, setUnsubmittedAnswers] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [submittedAnswers, setSubmittedAnswers] = useState({})

  const handleSubmit = () => {
    // TODO: Check if something other than text or number?
    let stagedAnswers = submittedAnswers
    let currentTag = Constants.QUESTIONS[currentQuestion].tag
    stagedAnswers[currentTag] = unsubmittedAnswers.toLowerCase() // Looks like --> currentTag: unsubmittedanswers
    setSubmittedAnswers(stagedAnswers)
    setUnsubmittedAnswers('')
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
        <>
          <h1>{Constants.QUESTIONS[currentQuestion].partOfSpeech}</h1>
          <input
            autoFocus
            onChange={handleChange}
            required
            type='text'
            value={unsubmittedAnswers}
          ></input>
          <button onClick={() => handleSubmit()}>Next 👉</button>
        </>
      )}
    </>
  )
}

export default WordPrompt
