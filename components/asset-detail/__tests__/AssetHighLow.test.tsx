import { customRender } from 'services/test-utils'
import { AssetHighLow } from 'components'
import { histories } from 'mock-data'

describe('AssetHighLow', () => {
  it('Should render it correctly', async () => {
    const { data } = histories

    const renderResult = customRender(<AssetHighLow data={data} />)
    expect(renderResult).toMatchSnapshot()
  })
})
