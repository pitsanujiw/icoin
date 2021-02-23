import { ExchangeItem } from 'components'
import { IExchanges, IEdgeNode, IExchangeNode } from 'types'
import { IUseSort, Render } from 'use-react-common'
import { Sort } from 'services'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel
} from '@material-ui/core'

interface IExchangeContentProps extends Omit<IUseSort, 'current'> {
  exchanges: IExchanges<IEdgeNode<IExchangeNode>>
}

const ExchangeContent: React.FC<IExchangeContentProps> = ({
  exchanges,
  sorts,
  onSort
}) => {
  return Render.ensure(
    readySorts => (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={readySorts.rank.active}
                  direction={Sort.toMaterialDirection(
                    readySorts.rank.direction
                  )}
                  onClick={() => onSort('rank')}
                >
                  Rank
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={readySorts.name.active}
                  direction={Sort.toMaterialDirection(
                    readySorts.name.direction
                  )}
                  onClick={() => onSort('name')}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>Top Pair </TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active={readySorts.tradingPairs.active}
                  direction={Sort.toMaterialDirection(
                    readySorts.tradingPairs.direction
                  )}
                  onClick={() => onSort('tradingPairs')}
                >
                  Trading Pairs
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active={readySorts.volumeUsd24Hr.active}
                  direction={Sort.toMaterialDirection(
                    readySorts.volumeUsd24Hr.direction
                  )}
                  onClick={() => onSort('volumeUsd24Hr')}
                >
                  Volume (24H)
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active={readySorts.percentTotalVolume.active}
                  direction={Sort.toMaterialDirection(
                    readySorts.percentTotalVolume.direction
                  )}
                  onClick={() => onSort('percentTotalVolume')}
                >
                  Total (%)
                </TableSortLabel>
              </TableCell>
              <TableCell align="center">
                <TableSortLabel
                  active={readySorts.updatedAt.active}
                  direction={Sort.toMaterialDirection(
                    readySorts.updatedAt.direction
                  )}
                  onClick={() => onSort('updatedAt')}
                >
                  Status
                </TableSortLabel>
              </TableCell>
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
    ),
    sorts
  )
}

export { ExchangeContent }
