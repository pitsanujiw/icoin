export type TOnPageChange = (
  event: React.MouseEvent<HTMLButtonElement>,
  page: number
) => void

export type TOnBuildURL = (page: numer) => string

export interface IPagination {
  page: number
}
