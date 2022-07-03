import React, { useEffect, useState } from 'react'
import * as Constants from '../assets/Constants'

const CompletedSadLib = (props) => {
  const [compiledAnswerChunks, setCompiledAnswerChunks] = useState([])

  useEffect(() => {
    prepareSadLib()
  }, [])

  // TODO: Question-- is this being run twice?
  const prepareAnswerChunks = (answerChunks) => {
    let theStorySoFar = []
    for (let i = 0; i < answerChunks.length; i++) {
      if (answerChunks[i].includes('ANSWER_')) {
        let chunkTag = answerChunks[i].split('ANSWER_')[1]
        theStorySoFar.push()
        theStorySoFar.push(
          <span className='goldish-answers'>
            {props.submittedAnswers[chunkTag]}
          </span>
        )
      } else {
        theStorySoFar.push(answerChunks[i])
      }
    }
    setCompiledAnswerChunks(theStorySoFar)
  }

  const prepareSadLib = () => {
    let answerChunks = Constants.SAD_LIB_FAVORITE_ITEM_COMPLETED.map(
      (chunk) => chunk
    )
    prepareAnswerChunks(answerChunks)
  }

  return (
    <section className='completed-sad-lib'>
      {compiledAnswerChunks.map((chunk, key) => (
        <span key={key}>{chunk}</span>
      ))}
    </section>
  )
}

export default CompletedSadLib
