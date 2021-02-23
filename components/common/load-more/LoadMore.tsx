import { ICommonProps } from 'types'
import { IconLoading } from 'components'
import { Toolbar, IconButton, makeStyles } from '@material-ui/core'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

interface ILoadMoreProps extends ICommonProps {
  onLoad: () => void
}

const useStyles = makeStyles(
  () => ({
    loadMore: {
      display: 'flex',
      justifyContent: 'center'
    }
  }),
  {
    name: 'LoadMore'
  }
)

const LoadMore: React.FC<ILoadMoreProps> = ({
  loading,
  onLoad
}): React.ReactElement => {
  const classes = useStyles()

  const onClickInternal = () => {
    if (!loading) onLoad()
  }

  return (
    <Toolbar className={classes.loadMore}>
      <IconButton onClick={onClickInternal}>
        <IconLoading loading={loading}>
          <ArrowDownwardIcon />
        </IconLoading>
      </IconButton>
    </Toolbar>
  )
}

export { LoadMore }
