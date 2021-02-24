import { customRender } from 'services/test-utils'
import { Header } from 'components'

describe('Header', () => {
  it('Should render it correctly', async () => {
    const renderResult = customRender(<Header />)
    expect(renderResult).toMatchSnapshot()
  })
})
