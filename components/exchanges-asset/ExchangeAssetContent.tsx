import { ExchangeAssetItem } from 'components'
import { IExchanges, IEdgeNode, IAssetNode } from 'types'
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
  assetMarkets: IExchanges<IEdgeNode<IAssetNode>>
}

const ExchangeAssetContent: React.FC<IExchangeContentProps> = ({
  assetMarkets
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Exchange</TableCell>
            <TableCell>Pair</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Volume (24H)</TableCell>
            <TableCell align="right">Volume (%)</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assetMarkets.edges.map(edgeNode => {
            const { node } = edgeNode

            return <ExchangeAssetItem key={node.id} assetNode={node} />
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export { ExchangeAssetContent }
