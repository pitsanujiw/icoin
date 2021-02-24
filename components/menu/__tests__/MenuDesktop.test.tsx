import { customRender } from 'services/test-utils'
import { MenuDesktop } from 'components'

describe('MenuDesktop', () => {
  it('Should render it correctly', async () => {
    const renderResult = customRender(<MenuDesktop />)
    expect(renderResult).toMatchSnapshot()
  })
})
