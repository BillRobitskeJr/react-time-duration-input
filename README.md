# TimeDurationInput

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/BillRobitskeJr/react-time-duration-input.svg?branch=master)](https://travis-ci.org/BillRobitskeJr/react-time-duration-input)
[![Coverage Status](https://coveralls.io/repos/github/BillRobitskeJr/react-time-duration-input/badge.svg?branch=master)](https://coveralls.io/github/BillRobitskeJr/react-time-duration-input?branch=master)

Provide simple time duration input in your React app.

## Installation

Install via NPM:
```
npm install --save react-time-duration-input
```

## Usage

```jsx
import { TimeDurationInput } from 'react-time-duration-input'

function SampleComponent () {
  const [ value, setValue ] = useState(2443332000)

  return (<TimeDurationInput value={value} onChange={setValue} />)
}
```

## Examples

### Basic Usage
```jsx
<TimeDurationInput value={milliseconds} onChange={(newValue) => setMilliseconds(newValue)} />
```

### Custom CSS Classes
```jsx
<TimeDurationInput value={value} className="form-control" onChange={setValue} />
```
