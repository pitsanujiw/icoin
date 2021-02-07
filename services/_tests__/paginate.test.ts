import { Paginate } from 'services'
import { PER_PAGE } from 'data'

describe('Paginate', () => {
  it('Should return correct offset', () => {
    expect(Paginate.offset(1, PER_PAGE)).toBe(0)
    expect(Paginate.offset(2, PER_PAGE)).toBe(PER_PAGE)
    expect(Paginate.offset(3, PER_PAGE)).toBe(PER_PAGE * 2)
  })

  it('Should return correct count', () => {
    expect(Paginate.count(6000, PER_PAGE)).toBe(120)
  })
})
