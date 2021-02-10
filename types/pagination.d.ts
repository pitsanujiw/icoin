export type TOnPageChange = (
  event: React.MouseEvent<HTMLButtonElement>,
  page: number
) => void

export type TOnBuildURL = (page: numer) => string

export interface IPagination {
  page: number
}

export interface IPageInfo {
  hasNextPage: boolean
}
