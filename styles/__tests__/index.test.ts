import { ICoinTheme } from 'styles'

describe('Theme', () => {
  it('Shuold return light theme config correctly', () =>
    expect(ICoinTheme('light')).toMatchSnapshot())

  it('Shuold return dark theme config correctly', () =>
    expect(ICoinTheme('dark')).toMatchSnapshot())
})
