import { Toolbar, makeStyles } from '@material-ui/core'
import { Pagination as PaginationCore } from '@material-ui/lab'
import { TOnPageChange, IPagination } from 'types'

interface IPaginationProps extends IPagination {
  count: number

  onChangePage: TOnPageChange
}

const useStyles = makeStyles(
  () => ({
    pagiation: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }),
  {
    name: 'Pagination'
  }
)

const Pagination: React.FC<IPaginationProps> = ({
  count,
  page,
  onChangePage
}): React.ReactElement => {
  const classes = useStyles()

  return (
    <Toolbar className={classes.pagiation}>
      <PaginationCore count={count} page={page} onChange={onChangePage} />
    </Toolbar>
  )
}

export { Pagination }
