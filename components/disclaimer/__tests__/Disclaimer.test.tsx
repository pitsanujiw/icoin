import { customRender } from 'services/test-utils'
import { Disclaimer } from 'components'

describe('Disclaimer', () => {
  it('Should render it correctly', async () => {
    const renderResult = customRender(<Disclaimer />)
    expect(renderResult).toMatchSnapshot()
  })
})
