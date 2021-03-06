import React, { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'

export function TimeDurationInput ({ value, scale, onChange, className }) {
  const [ duration, setDuration ] = useState(convertFromValue(value, scale))

  useEffect(() => {
    const newDuration = convertFromValue(value, scale)
    if (newDuration !== duration) setDuration(newDuration)
  }, [ value, scale ])

  const onInputChange = useCallback(({ target }) => {
    setDuration(target.value)
    const newValue = convertToValue(target.value, scale)
    if (!isNaN(newValue)) onChange(newValue)
  }, [ onChange, scale ])

  return (
    <input type="text" className={className} value={duration} onChange={onInputChange} data-testid="duration-input" />
  )
}

TimeDurationInput.propTypes = {
  value: PropTypes.number,
  scale: PropTypes.oneOf([ 'd', 'h', 'm', 's', 'ms' ]),
  onChange: PropTypes.func,
  className: PropTypes.string
}

TimeDurationInput.defaultProps = {
  scale: 'ms',
  onChange: () => {}
}

export const SCALE_CONVERSIONS = {
  ms: 1,
  s: 1000,
  m: 60000,
  h: 3600000,
  d: 86400000
}

export function convertValueFromScale (value, scale) {
  return value * (SCALE_CONVERSIONS[scale] || 1)
}

export function convertValueToScale (value, scale) {
  return value / (SCALE_CONVERSIONS[scale] || 1)
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

export const convertFromValue = (value, scale) => convertValueToDuration(convertValueFromScale(value, scale))

export const convertToValue = (duration, scale) => convertValueToScale(convertDurationToValue(duration), scale)

export default TimeDurationInput
