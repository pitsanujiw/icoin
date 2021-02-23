import { customRender } from 'services/test-utils'
import { useRouter } from 'next/router'
import { MenuDesktop } from 'components'

describe('MenuDesktop', () => {
  beforeEach(() => {
    ;(useRouter as jest.Mock).mockImplementation(() => ({
      route: '/'
    }))
  })

  it('Should render it correctly', async () => {
    const renderResult = customRender(<MenuDesktop />)
    expect(renderResult).toMatchSnapshot()
  })
})
