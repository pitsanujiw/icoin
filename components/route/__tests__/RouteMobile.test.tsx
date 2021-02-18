import { customRender } from 'services/test-utils'
import { RouteMobile } from 'components'
import { useRouter } from 'next/router'

describe('RouteMobile', () => {
  beforeEach(() => {
    ;(useRouter as jest.Mock).mockImplementation(() => ({
      route: '/'
    }))
  })

  it('Should render it correctly', async () => {
    const renderResult = customRender(
      <RouteMobile href="/" title="Home" onAfterPushing={jest.fn()} />
    )
    expect(renderResult).toMatchSnapshot()
  })
})
