import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core'
import {
  AssetItem,
  ContainerWrapper,
  Pagination,
  usePagination
} from 'components'
import { API, Paginate, Routes } from 'services'
import { PER_PAGE } from 'data'
import { IRootStore, IGlobalData } from 'types'
import { useAsync } from 'react-use'
import { useSelector } from 'react-redux'
import { Render } from 'use-react-common'

type IAssetsTableProps = Pick<IGlobalData, 'active_cryptocurrencies'>

const Assets = (): React.ReactElement => {
  const { data } = useSelector((store: IRootStore) => store.globals)

  if (data) {
    return (
      <AssetsTable active_cryptocurrencies={data.active_cryptocurrencies} />
    )
  }

  return <></>
}

const AssetsTable: React.FC<IAssetsTableProps> = ({
  active_cryptocurrencies
}): React.ReactElement => {
  const { page, onChangePage } = usePagination(page =>
    Routes.home.concat(`?page=${page}`)
  )
  const { value } = useAsync(
    () =>
      API.getAssets({
        offset: Paginate.offset(page, PER_PAGE),
        limit: PER_PAGE
      }),
    [page]
  )

  return Render.ensure(assets => {
    const { data } = assets.data

    return (
      <ContainerWrapper>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Name and Description</TableCell>
                <TableCell align="right">Market Cap</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Volume</TableCell>
                <TableCell align="right">Change (24h)</TableCell>
                <TableCell align="right">Circularing Supply</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(asset => (
                <AssetItem key={asset.id} asset={asset} />
              ))}
            </TableBody>
          </Table>
          <Pagination
            page={page}
            count={Paginate.count(active_cryptocurrencies, PER_PAGE)}
            onChangePage={onChangePage}
          />
        </TableContainer>
      </ContainerWrapper>
    )
  }, value)
}

export { Assets, AssetsTable }
