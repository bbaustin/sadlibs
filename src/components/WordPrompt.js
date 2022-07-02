import React, { useState } from 'react'
import * as Constants from '../assets/Constants'
import CompletedSadLib from './CompletedSadLib'

const WordPrompt = () => {
  const [unsubmittedAnswers, setUnsubmittedAnswers] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [submittedAnswers, setSubmittedAnswers] = useState([])

  const handleSubmit = () => {
    // TODO: Check if something other than text or number?
    let answersArray = submittedAnswers
    let currentTag = Constants.QUESTIONS[currentQuestion].tag
    let tagAndAnswer = { [currentTag]: unsubmittedAnswers.toLowerCase() }
    answersArray.push(tagAndAnswer)
    setSubmittedAnswers(answersArray)
    setUnsubmittedAnswers('')
    setCurrentQuestion(currentQuestion + 1)
  }

  const handleChange = (event) => {
    setUnsubmittedAnswers(event.target.value)
  }

  return (
    <>
      {submittedAnswers.length === Constants.QUESTIONS.length ? (
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
