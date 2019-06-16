import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup } from '@testing-library/react'
import 'jest-dom/extend-expect'

import TimeDurationInput from '../src/components/TimeDurationInput'

describe('TimeDurationInput', () => {
  it('renders successfully', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TimeDurationInput />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('presents an input element', () => {
    const { getByTestId } = render(<TimeDurationInput />)
    const input = getByTestId('duration-input')
    expect(input).toBeInTheDocument()
    cleanup()
  })

  describe('render with value (basic)', () => {
    afterEach(cleanup)

    test('when value = 1.5, input shows "1d 12h"', () => {
      const { getByTestId } = render(<TimeDurationInput value={1.5} />)
      const input = getByTestId('duration-input')
      expect(input).toHaveValue('1d 12h')
    })

    test('when value = 0, input shows "0d"', () => {
      const { getByTestId } = render(<TimeDurationInput value={0} />)
      const input = getByTestId('duration-input')
      expect(input).toHaveValue('0d')
    })

    test('when value is not provided, input shows "0d"', () => {
      const { getByTestId } = render(<TimeDurationInput />)
      const input = getByTestId('duration-input')
      expect(input).toHaveValue('0d')
    })
  })
})
