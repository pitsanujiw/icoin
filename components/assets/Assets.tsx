import { Paper, TableContainer } from '@material-ui/core'
import {
  AssetsTable,
  ContainerWrapper,
  Pagination,
  usePagination
} from 'components'
import { API, Paginate, Routes } from 'services'
import { PER_PAGE } from 'data'
import { IRootStore, IGlobalData } from 'types'
import { useSelector } from 'react-redux'
import { Render, useAsync } from 'use-react-common'

type IAssetsContentProps = Pick<IGlobalData, 'active_cryptocurrencies'>

const Assets = (): React.ReactElement => {
  const { data } = useSelector((store: IRootStore) => store.globals)

  if (data) {
    return (
      <AssetsContent active_cryptocurrencies={data.active_cryptocurrencies} />
    )
  }

  return <></>
}

const AssetsContent: React.FC<IAssetsContentProps> = ({
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
          <Pagination
            page={page}
            count={Paginate.count(active_cryptocurrencies, PER_PAGE)}
            onChangePage={onChangePage}
          />
          <AssetsTable data={data} />
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

export { Assets, AssetsContent }
