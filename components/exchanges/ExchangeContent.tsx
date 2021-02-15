import { ExchangeItem } from 'components'
import { IExchanges, IEdgeNode, INode } from 'types'
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'

interface IExchangeContentProps {
  exchanges: IExchanges<IEdgeNode<INode>>
}

const ExchangeContent: React.FC<IExchangeContentProps> = ({ exchanges }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Top Pair</TableCell>
            <TableCell align="right">Trading Pairs</TableCell>
            <TableCell align="right">Volume (24H)</TableCell>
            <TableCell align="right">Total (%)</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {exchanges.edges.map(edgeNode => {
            const { node } = edgeNode

            return <ExchangeItem key={node.id} node={node} />
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export { ExchangeContent }
