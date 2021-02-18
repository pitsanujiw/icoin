import { customRender } from 'services/test-utils'
import { useRouter } from 'next/router'
import { MenuMobile } from 'components'

describe('MenuMobile', () => {
  beforeEach(() => {
    ;(useRouter as jest.Mock).mockImplementation(() => ({
      route: '/'
    }))
  })

  it('Should render it correctly', async () => {
    const renderResult = customRender(<MenuMobile />)
    expect(renderResult).toMatchSnapshot()
  })
})
