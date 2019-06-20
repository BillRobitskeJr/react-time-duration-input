import React, { useState, useCallback } from 'react'

export default function TimeDurationInput ({ value, onChange }) {
  const [ duration, setDuration ] = useState(convertValueToDuration(value))
  const onInputChange = useCallback(({ target }) => {
    setDuration(target.value)
    const newValue = convertDurationToValue(target.value)
    if (!isNaN(newValue)) onChange(newValue)
  }, [ onChange ])
  return (
    <input type='text' value={duration} onChange={onInputChange} data-testid='duration-input' />
  )
}

export function convertValueToDuration (value) {
  const milliseconds = Math.round(value % 1000)
  const seconds = Math.floor(value / 1000 % 60)
  const minutes = Math.floor(value / 60000 % 60)
  const hours = Math.floor(value / 3600000 % 24)
  const days = Math.floor(value / 86400000)
  return [
    days && `${days}d`,
    hours && `${hours}h`,
    minutes && `${minutes}m`,
    seconds && `${seconds}s`,
    (milliseconds || !value) && `${milliseconds}ms`
  ].filter(x => !!x).join(' ')
}

export function convertDurationToValue (duration) {
  const matches = duration.trim().match(/^(\d+d)?\s*(\d+h)?\s*(\d+m)?\s*(\d+s)?\s*(\d+ms)?$/i)
  if (!matches) return parseFloat(duration)
  const [days, hours, minutes, seconds, milliseconds] = matches.slice(1).map(x => parseInt(x) || 0)
  return (((days * 24 + hours) * 60 + minutes) * 60 + seconds) * 1000 + milliseconds
}
