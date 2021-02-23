import { ExchangeStatus } from 'components'
import { Format } from 'services'
import { IExchangeNode } from 'types'
import { TableRow, TableCell } from '@material-ui/core'

interface IExchangeItemProps {
  node: IExchangeNode
}

const ExchangeItem: React.FC<IExchangeItemProps> = ({ node }) => {
  const {
    rank,
    name,
    tradingPairs,
    topPairBaseSymbol,
    topPairQuoteSymbol,
    volumeUsd24Hr,
    percentTotalVolume,
    updatedAt
  } = node

  return (
    <TableRow>
      <TableCell>{rank}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>
        {topPairBaseSymbol}/{topPairQuoteSymbol}
      </TableCell>
      <TableCell align="right">{tradingPairs}</TableCell>
      <TableCell align="right">{Format.currency(volumeUsd24Hr)}</TableCell>
      <TableCell align="right">{Format.percent(percentTotalVolume)}</TableCell>
      <TableCell align="center">
        <ExchangeStatus updatedAt={updatedAt} />
      </TableCell>
    </TableRow>
  )
}

export { ExchangeItem }
