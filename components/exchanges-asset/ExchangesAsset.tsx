import { EXCHANGE_ASSET, useQuery } from 'apollo'
import { ExchangeAssetContent } from 'components'
import { IExchangeAssetResponse } from 'types'
import { Render } from 'use-react-common'

interface IExchangesAssetProps {
  assetId: string
}

const ExchangesAsset: React.FC<IExchangesAssetProps> = ({ assetId }) => {
  const { data } = useQuery<IExchangeAssetResponse>(EXCHANGE_ASSET, {
    variables: {
      assetId,
      first: 20,
      direction: 'DESC',
      sort: 'volumeUsd24Hr'
    }
  })

  return Render.ensure(readyData => {
    return <ExchangeAssetContent assetMarkets={readyData.assetMarkets} />
  }, data)
}

export { ExchangesAsset }
