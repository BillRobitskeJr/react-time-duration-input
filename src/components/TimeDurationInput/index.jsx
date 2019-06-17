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
  if (!value) return '0d'
  const days = Math.floor(value)
  const hours = Math.floor(value * 24 % 24)
  const minutes = Math.floor(value * 1440 % 60)
  return [
    days && `${days}d`,
    hours && `${hours}h`,
    minutes && `${minutes}m`
  ].filter(x => !!x).join(' ')
}

export function convertDurationToValue (duration) {
  const matches = duration.trim().match(/^(\d+d)?\s*(\d+h)?\s*(\d+m)?$/i)
  if (!matches) return parseFloat(duration)
  const [days, hours, minutes] = matches.slice(1).map(x => parseInt(x) || 0)
  return days + hours / 24 + minutes / 1440
}
