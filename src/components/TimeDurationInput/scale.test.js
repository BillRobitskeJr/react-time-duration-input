import { convertValueFromScale, convertValueToScale } from './index'

const SCENARIOS = [
  { value: 0, scales: { d: 0, h: 0, m: 0, s: 0, ms: 0 } }
]

describe('convertValueFromScale(value, scale)', () => {
  describe('when scale is invalid', () => {
    it('returns the passed value', () => {
      const value = Math.random()
      expect(convertValueFromScale(value, 'invalid')).toBeCloseTo(value)
    })
  })

  SCENARIOS.forEach(({ value, scales }) => {
    Object.keys(scales).forEach(scale => {
      describe(`when value = ${scales[scale]} and scale = "${scale}"`, () => {
        it(`returns ${value}`, () => {
          expect(convertValueFromScale(scales[scale], scale)).toBeCloseTo(value)
        })
      })
    })
  })
})

describe('convertValueToScale(value, scale)', () => {
  describe('when scale is invalid', () => {
    it('returns the passed value', () => {
      const value = Math.random()
      expect(convertValueToScale(value, 'invalid')).toBeCloseTo(value)
    })
  })

  SCENARIOS.forEach(({ value, scales }) => {
    Object.keys(scales).forEach(scale => {
      describe(`when value = ${value} and scale = "${scale}"`, () => {
        it(`returns ${scales[scale]}`, () => {
          expect(convertValueToScale(value, scale)).toBeCloseTo(scales[scale])
        })
      })
    })
  })
})
