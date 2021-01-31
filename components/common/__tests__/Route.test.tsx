import { customRender } from 'services/test-utils'
import { Route } from 'components/common'
import { useRouter } from 'next/router'

describe('Route', () => {
  beforeEach(() => {
    ;(useRouter as jest.Mock).mockImplementation(() => ({
      route: '/',
    }))
  })

  it('Should render it correctly', async () => {
    const renderResult = customRender(<Route href="/" title="Home" />)
    expect(renderResult).toMatchSnapshot()
  })
})
