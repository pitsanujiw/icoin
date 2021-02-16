import { ExchangeAssetItem } from 'components'
import { IExchanges, IEdgeNode, IAssetNode } from 'types'
import { IUseSort, Render } from 'use-react-common'
import { Sort } from 'services'
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableSortLabel,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'

interface IExchangeContentProps extends Omit<IUseSort, 'current'> {
  assetMarkets: IExchanges<IEdgeNode<IAssetNode>>
}

const ExchangeAssetContent: React.FC<IExchangeContentProps> = ({
  assetMarkets,
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
                  active={readySorts.exchangeName.active}
                  direction={Sort.toMaterialDirection(
                    readySorts.exchangeName.direction
                  )}
                  onClick={() => onSort('exchangeName')}
                >
                  Exchange
                </TableSortLabel>
              </TableCell>
              <TableCell>Pair</TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active={readySorts.priceUsd.active}
                  direction={Sort.toMaterialDirection(
                    readySorts.priceUsd.direction
                  )}
                  onClick={() => onSort('priceUsd')}
                >
                  Price
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
                  active={readySorts.percentVolume.active}
                  direction={Sort.toMaterialDirection(
                    readySorts.percentVolume.direction
                  )}
                  onClick={() => onSort('percentVolume')}
                >
                  Volume (%)
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
            {assetMarkets.edges.map(edgeNode => {
              const { node } = edgeNode

              return <ExchangeAssetItem key={node.id} assetNode={node} />
            })}
          </TableBody>
        </Table>
      </TableContainer>
    ),
    sorts
  )
}

export { ExchangeAssetContent }
