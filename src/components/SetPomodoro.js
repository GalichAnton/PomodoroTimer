import React, { useContext, useState } from 'react'
import { SettingsContext } from '../context/SettingsContext'

const SetPomodoro = () => {

  const [newTimer, setNewTimer] = useState({
    work: 0,
    short: 0,
    long: 0,
    active: 'work'
  })

  const { updateExecute } = useContext(SettingsContext)

  const handleChange = input => {
    const { name, value } = input.target
    switch (name) {
      case 'work':
        setNewTimer({
          ...newTimer,
          work: parseInt(value)
        })
        break;
      case 'shortBreak':
        setNewTimer({
          ...newTimer,
          short: parseInt(value)
        })
        break;
      case 'longBreak':
        setNewTimer({
          ...newTimer,
          long: parseInt(value)
        })
        break;
      default:
        break;
    }
  }
  const handleSubmit = e => {
    e.preventDefault()
    updateExecute(newTimer)
  }
  return (
    <div className="form-container">
      <form noValidate onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input className="input" name="work" onChange={handleChange} value={newTimer.work} />
          <input className="input" name="shortBreak" onChange={handleChange} value={newTimer.short} />
          <input className="input" name="longBreak" onChange={handleChange} value={newTimer.long} />
        </div>
        <button type='submit'>Set Timer</button>
      </form>
    </div>
  )
}

export default SetPomodoro