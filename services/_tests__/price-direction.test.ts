import { PriceDirection } from 'services'

describe('PriceDirection', () => {
  it('Should return correct price direction', () => {
    expect(PriceDirection).toMatchSnapshot()
  })
})
