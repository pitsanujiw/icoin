import { customRender } from 'services/test-utils'
import { AssetRankBox } from 'components'

describe('AssetRankBox', () => {
  it('Should render it correctly', async () => {
    const renderResult = customRender(<AssetRankBox rank={1} />)
    expect(renderResult).toMatchSnapshot()
  })
})
