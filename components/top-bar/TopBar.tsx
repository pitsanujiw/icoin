import { IRootStore } from 'types'
import { makeStyles, AppBar, Grow, Divider, Toolbar } from '@material-ui/core'
import { TopBarContent } from 'components/top-bar/TopBarContent'
import { useGlobal } from 'components'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(
  () => ({
    toolBar: {
      overflow: 'auto',
      whiteSpace: 'nowrap'
    }
  }),
  {
    name: 'TopBar'
  }
)

const TopBar = (): React.ReactElement => {
  useGlobal()
  const classes = useStyles()
  const data = useSelector((store: IRootStore) => store.globals.data)

  return (
    <AppBar position="relative" color="inherit" elevation={0}>
      <Toolbar className={classes.toolBar}>
        {data && (
          <Grow in>
            <TopBarContent data={data} />
          </Grow>
        )}
      </Toolbar>
      <Divider light />
    </AppBar>
  )
}

export { TopBar }
