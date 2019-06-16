import React from 'react'
import ReactDOM from 'react-dom'

import TimeDurationInput from '../src/components/TimeDurationInput'

describe('TimeDurationInput', () => {
  it('renders successfully', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TimeDurationInput />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
