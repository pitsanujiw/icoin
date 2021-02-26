import { customRender } from 'services/test-utils'
import { FooterBottom } from 'components'

describe('FooterBottom', () => {
  it('Should render it correctly', async () => {
    const renderResult = customRender(<FooterBottom />)
    expect(renderResult).toMatchSnapshot()
  })
})
