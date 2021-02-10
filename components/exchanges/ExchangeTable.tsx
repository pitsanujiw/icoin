import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core'
import { ExchangeItem } from 'components'
import { IEdgeNode } from 'types'

interface IExchangeTableProps {
  edges: Array<IEdgeNode>
}

const ExchangeTable: React.FC<IExchangeTableProps> = ({ edges }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Rank</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Top Pair</TableCell>
          <TableCell align="right">Trading Pairs</TableCell>
          <TableCell align="right">Volume (24h)</TableCell>
          <TableCell align="right">Total (%)</TableCell>
          <TableCell align="center">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {edges.map(edgeNode => {
          const { node } = edgeNode

          return <ExchangeItem key={node.id} node={node} />
        })}
      </TableBody>
    </Table>
  )
}

export { ExchangeTable }
