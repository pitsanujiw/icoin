import {
  Toolbar,
  IconButton,
  CircularProgress,
  makeStyles
} from '@material-ui/core'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

interface ILoadMoreProps {
  loading: boolean

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
        {loading ? (
          <CircularProgress size="1rem" disableShrink />
        ) : (
          <ArrowDownwardIcon />
        )}
      </IconButton>
    </Toolbar>
  )
}

export { LoadMore }
