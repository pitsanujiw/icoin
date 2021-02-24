import { customRender } from 'services/test-utils'
import { Menu } from 'components'

describe('Menu', () => {
  it('Should render it correctly', async () => {
    const renderResult = customRender(<Menu />)
    expect(renderResult).toMatchSnapshot()
  })
})
