import { customRender } from 'services/test-utils'
import { useRouter } from 'next/router'
import { Menu } from 'components'

describe('Menu', () => {
  beforeEach(() => {
    ;(useRouter as jest.Mock).mockImplementation(() => ({
      route: '/',
    }))
  })

  it('Should render it correctly', async () => {
    const renderResult = customRender(<Menu />)
    expect(renderResult).toMatchSnapshot()
  })
})
