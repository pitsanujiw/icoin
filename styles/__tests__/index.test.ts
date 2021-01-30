import Theme from 'styles'

describe('Theme', () => {
  it('Shuold return theme config correctly', () =>
    expect(Theme).toMatchSnapshot())
})
