import { API } from 'services'
import { makeStyles, AppBar, Grow, Divider, Toolbar } from '@material-ui/core'
import { TopBarContent } from 'components/top-bar/TopBarContent'
import { useAsync } from 'react-use'

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
  const classes = useStyles()
  const { loading, value } = useAsync(API.getGlobals)

  return (
    <AppBar position="relative" color="inherit" elevation={0}>
      <Toolbar className={classes.toolBar}>
        {!loading && (
          <Grow in>
            <TopBarContent value={value} />
          </Grow>
        )}
      </Toolbar>
      <Divider />
    </AppBar>
  )
}

export { TopBar }
