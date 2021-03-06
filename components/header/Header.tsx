import { Container, AppBar, Toolbar, makeStyles } from '@material-ui/core'
import { ICoinLogo } from 'components'
import { Menu } from 'components/menu/Menu'
import React from 'react'

const useStyles = makeStyles(
  theme => ({
    toolbar: {
      paddingTop: theme.spacing(),
      paddingBottom: theme.spacing(),

      [theme.breakpoints.down('xs')]: {
        justifyContent: 'space-between'
      }
    }
  }),
  {
    name: 'Header'
  }
)

const Header = (): React.ReactElement => {
  const classes = useStyles()

  return (
    <AppBar position="relative" color="inherit" elevation={0}>
      <Container>
        <Toolbar className={classes.toolbar} disableGutters>
          <ICoinLogo />
          <Menu />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export { Header }
