import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup, fireEvent } from '@testing-library/react'
import 'jest-dom/extend-expect'

import TimeDurationInput from '../src/components/TimeDurationInput'

afterEach(cleanup)

describe('TimeDurationInput', () => {
  describe('when no properties are provided', () => {
    it('renders successfully', () => {
      render(<TimeDurationInput />)
    })
    it('displays an input element', () => {
      const { getByTestId } = render(<TimeDurationInput />)
      expect(getByTestId('duration-input')).toBeInTheDocument()
    })
  })

  describe('basic use (getTime-compatible values)', () => {
    describe('when value = 0', () => {
      it('displays "0ms" in the input element', () => {
        const { getByTestId } = render(<TimeDurationInput value={0} />)
        expect(getByTestId('duration-input')).toHaveValue('0ms')
      })
    })

    describe('when value = 250', () => {
      it('displays "250ms" in the input element', () => {
        const { getByTestId } = render(<TimeDurationInput value={250} />)
        expect(getByTestId('duration-input')).toHaveValue('250ms')
      })
    })
    
    describe('when value = 10000', () => {
      it('displays "10s" in the input element', () => {
        const { getByTestId } = render(<TimeDurationInput value={10000} />)
        expect(getByTestId('duration-input')).toHaveValue('10s')
      })
    })

    describe('when value = 300000', () => {
      it('displays "5m" in the input element', () => {
        const { getByTestId } = render(<TimeDurationInput value={300000} />)
        expect(getByTestId('duration-input')).toHaveValue('5m')
      })
    })

    describe('when value = 7200000', () => {
      it('displays "2h" in the input element', () => {
        const { getByTestId } = render(<TimeDurationInput value={7200000} />)
        expect(getByTestId('duration-input')).toHaveValue('2h')
      })
    })

    describe('when value = 345600000', () => {
      it('displays "4d" in the input element', () => {
        const { getByTestId } = render(<TimeDurationInput value={345600000} />)
        expect(getByTestId('duration-input')).toHaveValue('4d')
      })
    })

    describe('when value = 152250', () => {
      it('displays "2m 32s 250ms" in the input element', () => {
        const { getByTestId } = render(<TimeDurationInput value={152250} />)
        expect(getByTestId('duration-input')).toHaveValue('2m 32s 250ms')
      })
    })

    describe('when value = 353110250', () => {
      it('displays "4d 2h 5m 10s 250ms" in the input element', () => {
        const { getByTestId } = render(<TimeDurationInput value={353110250} />)
        expect(getByTestId('duration-input')).toHaveValue('4d 2h 5m 10s 250ms')
      })
    })

    describe('when input element is changed to "250ms"', () => {
      it('calls onChange with value 250', () => {
        const onChange = jest.fn()
        const { getByTestId } = render(<TimeDurationInput onChange={onChange} />)

        fireEvent.change(getByTestId('duration-input'), { target: { value: '250ms' } })

        expect(onChange.mock.calls.length).toBe(1)
        expect(onChange.mock.calls[0][0]).toBe(250)
      })
    })

    describe('when input element is changed to "10s"', () => {
      it('calls onChange with value 10000', () => {
        const onChange = jest.fn()
        const { getByTestId } = render(<TimeDurationInput onChange={onChange} />)

        fireEvent.change(getByTestId('duration-input'), { target: { value: '10s' } })

        expect(onChange.mock.calls.length).toBe(1)
        expect(onChange.mock.calls[0][0]).toBe(10000)
      })
    })

    describe('when input element is changed to "5m"', () => {
      it('calls onChange with value 300000', () => {
        const onChange = jest.fn()
        const { getByTestId } = render(<TimeDurationInput onChange={onChange} />)

        fireEvent.change(getByTestId('duration-input'), { target: { value: '5m' } })

        expect(onChange.mock.calls.length).toBe(1)
        expect(onChange.mock.calls[0][0]).toBe(300000)
      })
    })

    describe('when input element is changed to "2h"', () => {
      it('calls onChange with value 7200000', () => {
        const onChange = jest.fn()
        const { getByTestId } = render(<TimeDurationInput onChange={onChange} />)

        fireEvent.change(getByTestId('duration-input'), { target: { value: '2h' } })

        expect(onChange.mock.calls.length).toBe(1)
        expect(onChange.mock.calls[0][0]).toBe(7200000)
      })
    })

    describe('when input element is changed to "4d"', () => {
      it('calls onChange with value 345600000', () => {
        const onChange = jest.fn()
        const { getByTestId } = render(<TimeDurationInput onChange={onChange} />)

        fireEvent.change(getByTestId('duration-input'), { target: { value: '4d' } })

        expect(onChange.mock.calls.length).toBe(1)
        expect(onChange.mock.calls[0][0]).toBe(345600000)
      })
    })

    describe('when input element is changed to "2m 32s 250ms"', () => {
      it('calls onChange with value 152250', () => {
        const onChange = jest.fn()
        const { getByTestId } = render(<TimeDurationInput onChange={onChange} />)

        fireEvent.change(getByTestId('duration-input'), { target: { value: '2m 32s 250ms' } })

        expect(onChange.mock.calls.length).toBe(1)
        expect(onChange.mock.calls[0][0]).toBe(152250)
      })
    })

    describe('when input element is changed to "4d 2h 5m 10s 250ms"', () => {
      it('calls onChange with value 353110250', () => {
        const onChange = jest.fn()
        const { getByTestId } = render(<TimeDurationInput onChange={onChange} />)

        fireEvent.change(getByTestId('duration-input'), { target: { value: '4d 2h 5m 10s 250ms' } })

        expect(onChange.mock.calls.length).toBe(1)
        expect(onChange.mock.calls[0][0]).toBe(353110250)
      })
    })
  })
})
