import { API } from 'services'
import { makeStyles, AppBar, Grow, Toolbar } from '@material-ui/core'
import { TopBarContent } from 'components/top-bar/TopBarContent'
import { useAsync } from 'react-use'

const useStyles = makeStyles(
  (theme) => ({
    toolBar: {
      overflow: 'auto',
      whiteSpace: 'nowrap',
    },
  }),
  {
    name: 'TopBar',
  }
)

const TopBar = () => {
  const classes = useStyles()
  const { loading, value } = useAsync(API.getGlobals)

  return (
    <AppBar position="relative" color="inherit" variant="outlined">
      <Toolbar className={classes.toolBar}>
        {!loading && (
          <Grow in>
            <TopBarContent value={value} />
          </Grow>
        )}
      </Toolbar>
    </AppBar>
  )
}

export { TopBar }
