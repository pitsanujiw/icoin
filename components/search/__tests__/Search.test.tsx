import { customRender } from 'services/test-utils'
import { Search } from 'components'

describe('Search', () => {
  it('Should render it correctly', async () => {
    const renderResult = customRender(<Search />)
    expect(renderResult).toMatchSnapshot()
  })
})
