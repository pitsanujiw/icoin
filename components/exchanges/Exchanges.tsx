import { ContainerWrapper, ExchangeTable } from 'components'
import { IExchangeParams, IExchangeResponse } from 'types'
import { Render } from 'use-react-common'
import { TableContainer, Paper } from '@material-ui/core'
import { useQuery, EXCHANGE } from 'apollo'

const Exchanges: React.FC = () => {
  const { data } = useQuery<IExchangeResponse, IExchangeParams>(EXCHANGE, {
    variables: {
      direction: 'ASC',
      first: 20,
      sort: 'rank'
    }
  })

  return Render.ensure(readyData => {
    const { exchanges } = readyData

    return (
      <ContainerWrapper>
        <TableContainer component={Paper}>
          <ExchangeTable edges={exchanges.edges} />
        </TableContainer>
      </ContainerWrapper>
    )
  }, data)
}

export { Exchanges }
