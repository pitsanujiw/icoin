import { customRender } from 'services/test-utils'
import { Header } from 'components'
import { useRouter } from 'next/router'

describe('Header', () => {
  beforeEach(() => {
    ;(useRouter as jest.Mock).mockImplementation(() => ({
      route: '/',
    }))
  })

  it('Should render it correctly', async () => {
    const renderResult = customRender(<Header />)
    expect(renderResult).toMatchSnapshot()
  })
})
