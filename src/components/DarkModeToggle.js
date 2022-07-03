import React, { useState } from 'react'

const DarkModeToggle = () => {
  const [currentMode, setCurrentMode] = useState('')

  const handleClick = () => {
    setCurrentMode('dark')
  }

  return <span onClick={() => handleClick()}>🌝</span>
}

export default DarkModeToggle
