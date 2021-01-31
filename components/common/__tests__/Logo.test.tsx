import { customRender } from 'services/test-utils'
import { ICoinLogo } from 'components/common'

describe('Logo', () => {
  it('Should render it correctly', async () => {
    const renderResult = customRender(<ICoinLogo />)
    expect(renderResult).toMatchSnapshot()
  })
})
