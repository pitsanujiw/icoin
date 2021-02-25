import { customRender } from 'services/test-utils'
import { Footer } from 'components'

describe('Footer', () => {
  it('Should render it correctly', async () => {
    const renderResult = customRender(<Footer />)
    expect(renderResult).toMatchSnapshot()
  })
})
