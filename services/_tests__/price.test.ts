import { histories } from 'mock-data'
import { Price } from 'services'

describe('Price', () => {
  const { data } = histories

  it('Should return max price', () => {
    expect(Price.max(data.assetHistories)).toMatchSnapshot()
  })

  it('Should return min price', () => {
    expect(Price.min(data.assetHistories)).toMatchSnapshot()
  })
})
