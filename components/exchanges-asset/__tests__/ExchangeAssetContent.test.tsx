import { assetMarkets } from 'mock-data'
import { customRender } from 'services/test-utils'
import { ExchangeAssetContent } from 'components'
import { renderHook } from '@testing-library/react-hooks'
import { useSort } from 'use-react-common'

describe('ExchangeAssetContent', () => {
  it('Should render it correctly', async () => {
    const { result } = renderHook(() =>
      useSort(
        [
          'exchangeName',
          'priceUsd',
          'volumeUsd24Hr',
          'percentVolume',
          'updatedAt'
        ],
        {
          field: 'volumeUsd24Hr',
          direction: 'DESC'
        }
      )
    )

    const { sorts, onSort } = result.current

    const renderResult = customRender(
      <ExchangeAssetContent
        assetMarkets={assetMarkets}
        sorts={sorts}
        onSort={onSort}
      />
    )
    expect(renderResult).toMatchSnapshot()
  })
})
