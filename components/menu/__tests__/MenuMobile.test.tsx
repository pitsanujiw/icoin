import { customRender } from 'services/test-utils'
import { MenuMobile } from 'components'

describe('MenuMobile', () => {
  it('Should render it correctly', async () => {
    const renderResult = customRender(<MenuMobile />)
    expect(renderResult).toMatchSnapshot()
  })
})
