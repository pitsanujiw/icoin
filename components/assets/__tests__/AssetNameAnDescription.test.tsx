import { customRender } from 'services/test-utils'
import { AssetNameAndDescription } from 'components'

describe('AssetNameAndDescription', () => {
  it('Should render it correctly', async () => {
    const renderResult = customRender(
      <AssetNameAndDescription name="Bitcoin" symbol="BTC" />
    )
    expect(renderResult).toMatchSnapshot()
  })
})
