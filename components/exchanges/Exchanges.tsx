import {
  ContainerWrapper,
  ExchangeContent,
  LoadMore,
  useLoadMore
} from 'components'
import { EXCHANGE, useQuery } from 'apollo'
import { IExchangeResponse, IExchangeParams } from 'types'
import { Render, useSort } from 'use-react-common'

const Exchanges: React.FC = () => {
  const { count, onLoad } = useLoadMore(20)
  const { current, sorts, onSort } = useSort(
    [
      'rank',
      'name',
      'tradingPairs',
      'volumeUsd24Hr',
      'percentTotalVolume',
      'updatedAt'
    ],
    {
      field: 'volumeUsd24Hr',
      direction: 'DESC'
    }
  )

  const { data, loading } = useQuery<IExchangeResponse, IExchangeParams>(
    EXCHANGE,
    {
      variables: {
        first: count,
        sort: current.field,
        direction: current.direction
      }
    }
  )

  return Render.ensure(readyData => {
    const { exchanges } = readyData
    const {
      pageInfo: { hasNextPage }
    } = exchanges

    return (
      <ContainerWrapper>
        <ExchangeContent exchanges={exchanges} sorts={sorts} onSort={onSort} />
        {hasNextPage && <LoadMore loading={loading} onLoad={onLoad} />}
      </ContainerWrapper>
    )
  }, data)
}

export { Exchanges }
