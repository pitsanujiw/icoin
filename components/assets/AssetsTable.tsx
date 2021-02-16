import {
  Table,
  TableBody,
  TableCell,
  TableSortLabel,
  TableHead,
  TableRow,
  LinearProgress
} from '@material-ui/core'
import { AssetItem } from 'components'
import { IAsset } from 'types'
import { useDataSort } from 'use-react-common'

interface IAssetsTableProps {
  data: Array<IAsset>
}

const AssetsTable: React.FC<IAssetsTableProps> = ({ data }) => {
  const { loading, sortedData, sorts, onSort } = useDataSort(data, 'rank')

  if (loading) {
    return <LinearProgress />
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <TableSortLabel
              direction={sorts.rank.direction}
              active={sorts.rank.active}
              onClick={() => onSort('rank')}
            >
              Rank
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              direction={sorts.name.direction}
              active={sorts.name.active}
              onClick={() => onSort('name')}
            >
              Name and Description
            </TableSortLabel>
          </TableCell>
          <TableCell align="right">
            <TableSortLabel
              direction={sorts.marketCapUsd.direction}
              active={sorts.marketCapUsd.active}
              onClick={() => onSort('marketCapUsd')}
            >
              Market Cap
            </TableSortLabel>
          </TableCell>
          <TableCell align="right">
            <TableSortLabel
              direction={sorts.priceUsd.direction}
              active={sorts.priceUsd.active}
              onClick={() => onSort('priceUsd')}
            >
              Price
            </TableSortLabel>
          </TableCell>
          <TableCell align="right">
            <TableSortLabel
              direction={sorts.volumeUsd24Hr.direction}
              active={sorts.volumeUsd24Hr.active}
              onClick={() => onSort('volumeUsd24Hr')}
            >
              Volume
            </TableSortLabel>
          </TableCell>
          <TableCell align="right">
            <TableSortLabel
              direction={sorts.changePercent24Hr.direction}
              active={sorts.changePercent24Hr.active}
              onClick={() => onSort('changePercent24Hr')}
            >
              Change (24h)
            </TableSortLabel>
          </TableCell>
          <TableCell align="right">
            <TableSortLabel
              direction={sorts.supply.direction}
              active={sorts.supply.active}
              onClick={() => onSort('supply')}
            >
              Circularing Supply
            </TableSortLabel>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedData.map(asset => (
          <AssetItem key={asset.id} asset={asset} />
        ))}
      </TableBody>
    </Table>
  )
}

export { AssetsTable }
