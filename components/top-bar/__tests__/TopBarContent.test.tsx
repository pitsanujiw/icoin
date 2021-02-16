import { customRender } from 'services/test-utils'
import { TopBarContent } from 'components'
import { globalData } from 'mock-data'

describe('TopBarContent', () => {
  it('Should render correctly', async () => {
    const renderResult = customRender(<TopBarContent globalData={globalData} />)

    expect(renderResult).toMatchSnapshot()
  })
})
