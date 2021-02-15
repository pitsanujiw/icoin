import { ContainerWrapper, ExchangeContent } from 'components'
import { EXCHANGE, useQuery } from 'apollo'
import { IExchangeResponse, IExchangeParams } from 'types'
import { Render } from 'use-react-common'

const Exchanges: React.FC = () => {
  const { data } = useQuery<IExchangeResponse, IExchangeParams>(EXCHANGE, {
    variables: {
      first: 20,
      direction: 'ASC',
      sort: 'rank'
    }
  })

  return Render.ensure(readyData => {
    return (
      <ContainerWrapper>
        <ExchangeContent exchanges={readyData.exchanges} />
      </ContainerWrapper>
    )
  }, data)
}

export { Exchanges }
