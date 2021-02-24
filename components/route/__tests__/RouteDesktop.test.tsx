import { customRender } from 'services/test-utils'
import { RouteDesktop } from 'components'

describe('RouteDesktop', () => {
  it('Should render it correctly', async () => {
    const renderResult = customRender(<RouteDesktop href="/" title="Home" />)
    expect(renderResult).toMatchSnapshot()
  })
})
