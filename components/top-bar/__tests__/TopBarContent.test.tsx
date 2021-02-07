import { customRender, mockResponse } from 'services/test-utils'
import { TopBarContent } from 'components'
import { globals } from 'mock-data'

describe('TopBarContent', () => {
  it('Should render correctly', async () => {
    const { data } = await mockResponse(globals)

    const renderResult = customRender(<TopBarContent data={data.data} />)

    expect(renderResult).toMatchSnapshot()
  })
})
