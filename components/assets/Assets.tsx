import { Paper, TableContainer } from '@material-ui/core'
import {
  AssetsTable,
  ContainerWrapper,
  Pagination,
  usePagination
} from 'components'
import { API, Paginate, Routes } from 'services'
import { PER_PAGE } from 'data'
import { IRootStore, IMarketTotal } from 'types'
import { useSelector } from 'react-redux'
import { Render, useAsync } from 'use-react-common'

type IAssetsContentProps = Pick<IMarketTotal, 'assets'>

const Assets = (): React.ReactElement => {
  const globalData = useSelector((store: IRootStore) => store.globalData)

  return Render.ensure(readyMarketTotal => {
    const { assets } = readyMarketTotal

    return <AssetsContent assets={assets} />
  }, globalData.marketTotal)
}

const AssetsContent: React.FC<IAssetsContentProps> = ({
  assets
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

  return Render.ensure(({ data: assetData }) => {
    const { data } = assetData

    return (
      <ContainerWrapper>
        <TableContainer component={Paper}>
          <Pagination
            page={page}
            count={Paginate.count(assets, PER_PAGE)}
            onChangePage={onChangePage}
          />
          <AssetsTable data={data} />
          <Pagination
            page={page}
            count={Paginate.count(assets, PER_PAGE)}
            onChangePage={onChangePage}
          />
        </TableContainer>
      </ContainerWrapper>
    )
  }, value)
}

export { Assets, AssetsContent }
