import { EXCHANGE_ASSET, useQuery } from 'apollo'
import { ExchangeAssetContent, LoadMore, useLoadMore } from 'components'
import { IExchangeAssetResponse } from 'types'
import { Render, useSort } from 'use-react-common'

interface IExchangesAssetProps {
  assetId: string
}

const ExchangesAsset: React.FC<IExchangesAssetProps> = ({ assetId }) => {
  const { count, onLoad } = useLoadMore(20)
  const { current, sorts, onSort } = useSort(
    ['exchangeName', 'priceUsd', 'volumeUsd24Hr', 'percentVolume', 'updatedAt'],
    {
      field: 'volumeUsd24Hr',
      direction: 'DESC'
    }
  )
  const { data, loading } = useQuery<IExchangeAssetResponse>(EXCHANGE_ASSET, {
    variables: {
      assetId,
      first: count,
      direction: current.direction,
      sort: current.field
    }
  })

  return Render.ensure(readyData => {
    const { assetMarkets } = readyData
    const {
      pageInfo: { hasNextPage }
    } = assetMarkets

    return (
      <>
        <ExchangeAssetContent
          assetMarkets={assetMarkets}
          sorts={sorts}
          onSort={onSort}
        />
        {hasNextPage && <LoadMore loading={loading} onLoad={onLoad} />}
      </>
    )
  }, data)
}

export { ExchangesAsset }
