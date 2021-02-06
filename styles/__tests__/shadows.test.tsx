import { ICoinShadows } from 'styles'

describe('ICoinShadows', () => {
  it('Shuold return shadows config correctly', () =>
    expect(ICoinShadows).toMatchSnapshot())
})
