import React, { useEffect, useState } from 'react'
import * as Constants from '../assets/Constants'

const CompletedSadLib = (props) => {
  const [compiledAnswerChunks, setCompiledAnswerChunks] = useState([])

  useEffect(() => {
    prepareSadLib()
  }, [])

  const prepareAnswerChunks = (answerChunks) => {
    let theStorySoFar = []
    for (let i = 0; i < answerChunks.length; i++) {
      if (answerChunks[i].includes('ANSWER_')) {
        let chunkTag = answerChunks[i].split('ANSWER_')[1]
        // TODO: Grab from props the appropriately TAGged answer
        theStorySoFar.push(chunkTag)
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
    console.log(`answerChunks ${answerChunks}`)
    prepareAnswerChunks(answerChunks)
  }

  return (
    <>
      {compiledAnswerChunks.map((chunk, key) => (
        <span key={key}>{chunk}</span>
      ))}
    </>
  )
}

export default CompletedSadLib
