import { customRender, mockResponse } from 'services/test-utils'
import { TopBarContent } from 'components'
import { globals } from 'mock-data'

describe('TopBarContent', () => {
  it('Should render correctly', async () => {
    const value = await mockResponse(globals)

    const renderResult = customRender(<TopBarContent value={value} />)

    expect(renderResult).toMatchSnapshot()
  })
})
