import { IRootStore } from 'types'
import {
  makeStyles,
  Container,
  AppBar,
  Divider,
  Toolbar
} from '@material-ui/core'
import { TopBarContent } from 'components/top-bar/TopBarContent'
import { useGlobal } from 'components'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(
  () => ({
    toolbar: {
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
    <AppBar position="relative" elevation={0}>
      <Container>
        <Toolbar className={classes.toolbar} variant="dense" disableGutters>
          <TopBarContent globalData={globalData} />
        </Toolbar>
      </Container>
      <Divider light />
    </AppBar>
  )
}

export { TopBar }
