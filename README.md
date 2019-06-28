# TimeDurationInput

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/BillRobitskeJr/react-time-duration-input.svg?branch=master)](https://travis-ci.org/BillRobitskeJr/react-time-duration-input)
[![Coverage Status](https://coveralls.io/repos/github/BillRobitskeJr/react-time-duration-input/badge.svg?branch=master)](https://coveralls.io/github/BillRobitskeJr/react-time-duration-input?branch=master)
[![CodeFactor](https://www.codefactor.io/repository/github/billrobitskejr/react-time-duration-input/badge/master)](https://www.codefactor.io/repository/github/billrobitskejr/react-time-duration-input/overview/master)
[![MIT License](https://img.shields.io/github/license/BillRobitskeJr/react-time-duration-input.svg)](https://github.com/BillRobitskeJr/react-time-duration-input/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/react-time-duration-input.svg)](https://www.npmjs.com/package/react-time-duration-input)

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
Pass your duration value (in milliseconds) to the `value` property, and 
it will be displayed in "#d #h #m #s #ms" format.
When the user change the displayed value, and `onChange` will be called
with the new millisecond value.

```jsx
<TimeDurationInput
  value={milliseconds}
  onChange={(newValue) => setMilliseconds(newValue)} />
```

### Custom CSS Classes
Provide a `className` value and it will be passed along to the inner
input element.

```jsx
<TimeDurationInput
  value={value}
  className="form-control"
  onChange={setValue} />
```

### Scaled Values
Provide one of the scale values ("d", "h", "m", "s", or "ms") to the
`scale` property and `value` will be read as being at that scale and
`onChange` will be passed values at that scale.

For example, if `scale` is set to "h" then a `value` of 3 will appear
as "3h" instead of "3ms", and if "1h 45m" is entered in the inner
input element, `onChange` will be called with a value of 1.75.

```jsx
<TimeDurationInput
  value={hours}
  scale="h"
  onChange={(newValue) => setHours(newValue)} />
```
