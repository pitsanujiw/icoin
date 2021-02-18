import {
  IconButton,
  SwipeableDrawer,
  List,
  makeStyles
} from '@material-ui/core'
import { RouteMobile } from 'components'
import { Routes } from 'services'
import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(
  theme => ({
    paper: {
      minWidth: theme.spacing(25)
    }
  }),
  {
    name: 'MenuMobile'
  }
)

const MenuMobile = (): React.ReactElement => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const onToggleMenu = () => setOpen(prevState => !prevState)

  return (
    <>
      <IconButton onClick={onToggleMenu}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={onToggleMenu}
        onClose={onToggleMenu}
        classes={{
          paper: classes.paper
        }}
      >
        <List>
          <RouteMobile
            href={Routes.home}
            onAfterPushing={onToggleMenu}
            title="Market Cap"
          />
          <RouteMobile
            href={Routes.exchanges}
            onAfterPushing={onToggleMenu}
            title="Exchanges"
          />
          <RouteMobile
            href={Routes.charts}
            onAfterPushing={onToggleMenu}
            title="Charts"
          />
        </List>
      </SwipeableDrawer>
    </>
  )
}

export { MenuMobile }
