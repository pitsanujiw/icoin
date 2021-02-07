import { TOnPageChange, TOnBuildURL } from 'types'
import { useRouter } from 'next/router'

interface IUsePagination {
  page: number

  onChangePage: TOnPageChange
}

const usePagination = (onBuildURL: TOnBuildURL): IUsePagination => {
  const { query, push } = useRouter()
  const page = Number(query.page) || 1

  const onChangePage = (
    _: React.MouseEvent<HTMLButtonElement>,
    page: number
  ) => {
    push(onBuildURL(page))
  }

  return { page, onChangePage }
}

export { usePagination }
