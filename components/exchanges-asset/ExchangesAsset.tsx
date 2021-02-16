import { EXCHANGE_ASSET, useQuery } from 'apollo'
import { ExchangeAssetContent } from 'components'
import { Render, useSort } from 'use-react-common'

interface IExchangesAssetProps {
  assetId: string
}

const ExchangesAsset: React.FC<IExchangesAssetProps> = ({ assetId }) => {
  const { current, sorts, onSort } = useSort(
    ['exchangeName', 'priceUsd', 'volumeUsd24Hr', 'percentVolume', 'updatedAt'],
    {
      field: 'volumeUsd24Hr',
      direction: 'DESC'
    }
  )

  const { data } = useQuery(EXCHANGE_ASSET, {
    variables: {
      assetId,
      first: 20,
      direction: current.direction,
      sort: current.field
    }
  })

  return Render.ensure(readyData => {
    return (
      <ExchangeAssetContent
        assetMarkets={readyData.assetMarkets}
        sorts={sorts}
        onSort={onSort}
      />
    )
  }, data)
}

export { ExchangesAsset }
