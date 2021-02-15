import { customRender } from 'services/test-utils'
import { ExchangeAssetContent } from 'components'
import { assetMarkets } from 'mock-data'

describe('ExchangeAssetContent', () => {
  it('Should render it correctly', async () => {
    const renderResult = customRender(
      <ExchangeAssetContent assetMarkets={assetMarkets} />
    )
    expect(renderResult).toMatchSnapshot()
  })
})
