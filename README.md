# TimeDurationInput

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Provide simple time duration input in your React app.

## Installation

Install via NPM:
```
npm install --save react-time-duration-input
```

## Usage

```jsx
import TimeDurationInput from 'react-time-duration-input'

function SampleComponent () {
  const [value, setValue ] = useState(2443332000)

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
