import React from 'react'
import { render } from '@testing-library/react'

import { TimeDurationInput } from './index'

describe('react-time-duration-input', () => {
  it('exports TimeDurationInput React component', () => {
    expect(TimeDurationInput).toBeDefined()
    render(<TimeDurationInput />)
  })
})
