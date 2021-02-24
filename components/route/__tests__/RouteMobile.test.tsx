import { customRender } from 'services/test-utils'
import { RouteMobile } from 'components'

describe('RouteMobile', () => {
  it('Should render it correctly', async () => {
    const renderResult = customRender(
      <RouteMobile href="/" title="Home" onAfterPushing={jest.fn()} />
    )
    expect(renderResult).toMatchSnapshot()
  })
})
