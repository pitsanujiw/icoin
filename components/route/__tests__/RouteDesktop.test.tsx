import { customRender } from 'services/test-utils'
import { RouteDesktop } from 'components'
import { useRouter } from 'next/router'

describe('RouteDesktop', () => {
  beforeEach(() => {
    ;(useRouter as jest.Mock).mockImplementation(() => ({
      route: '/'
    }))
  })

  it('Should render it correctly', async () => {
    const renderResult = customRender(<RouteDesktop href="/" title="Home" />)
    expect(renderResult).toMatchSnapshot()
  })
})
