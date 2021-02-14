import { Format, numberFormatter } from 'services'
import { assetsString, historyString } from 'mock-data'

describe('Format', () => {
  it('Should return correct big number format', () => {
    expect(Format.bigNumber(12345678910)).toMatchSnapshot()
  })

  it('Should return correct currency format', () => {
    expect(Format.currency(6789)).toMatchSnapshot()
  })

  it('Should return correct percent format', () => {
    expect(Format.percent(25)).toMatchSnapshot()
  })

  it('Should return correct number data in an array', () => {
    expect(Format.toNumbers(assetsString, ['priceUsd'])).toMatchSnapshot()
  })

  it('Should return correct to number format', () => {
    expect(Format.toNumber(historyString, 'priceUsd')).toMatchSnapshot()
  })
})

describe('numberFormatter', () => {
  it('Should return correct format', () => {
    expect(numberFormatter.format(12345678910)).toMatchSnapshot()
  })
})
