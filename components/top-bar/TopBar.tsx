import { IRootStore } from 'types'
import { makeStyles, AppBar, Divider, Toolbar } from '@material-ui/core'
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
  const globalData = useSelector((store: IRootStore) => store.globalData)

  return (
    <AppBar position="relative" color="secondary" elevation={0}>
      <Toolbar className={classes.toolBar}>
        <TopBarContent globalData={globalData} />
      </Toolbar>
      <Divider light />
    </AppBar>
  )
}

export { TopBar }
