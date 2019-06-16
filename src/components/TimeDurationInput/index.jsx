import React, { useState } from 'react'

export default function TimeDurationInput ({ value }) {
  const [ duration ] = useState(convertValueToDuration(value))
  return (
    <input type='text' value={duration} data-testid='duration-input' />
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
