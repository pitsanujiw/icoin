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
import { useSort } from 'use-react-common'

interface IAssetsTableProps {
  data: Array<IAsset>
}

const AssetsTable: React.FC<IAssetsTableProps> = ({ data }) => {
  const { loading, sortedData, sorts, sortBy } = useSort(data, 'rank')

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
              onClick={() => sortBy('rank')}
            >
              Rank
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              direction={sorts.name.direction}
              active={sorts.name.active}
              onClick={() => sortBy('name')}
            >
              Name and Description
            </TableSortLabel>
          </TableCell>
          <TableCell align="right">
            <TableSortLabel
              direction={sorts.marketCapUsd.direction}
              active={sorts.marketCapUsd.active}
              onClick={() => sortBy('marketCapUsd')}
            >
              Market Cap
            </TableSortLabel>
          </TableCell>
          <TableCell align="right">
            <TableSortLabel
              direction={sorts.priceUsd.direction}
              active={sorts.priceUsd.active}
              onClick={() => sortBy('priceUsd')}
            >
              Price
            </TableSortLabel>
          </TableCell>
          <TableCell align="right">
            <TableSortLabel
              direction={sorts.volumeUsd24Hr.direction}
              active={sorts.volumeUsd24Hr.active}
              onClick={() => sortBy('volumeUsd24Hr')}
            >
              Volume
            </TableSortLabel>
          </TableCell>
          <TableCell align="right">
            <TableSortLabel
              direction={sorts.changePercent24Hr.direction}
              active={sorts.changePercent24Hr.active}
              onClick={() => sortBy('changePercent24Hr')}
            >
              Change (24h)
            </TableSortLabel>
          </TableCell>
          <TableCell align="right">
            <TableSortLabel
              direction={sorts.supply.direction}
              active={sorts.supply.active}
              onClick={() => sortBy('supply')}
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
