import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { ICoinLogo } from 'components'
import { Menu } from 'components/header/Menu'

const Header = (): React.ReactElement => {
  return (
    <AppBar position="relative" color="inherit" elevation={0}>
      <Toolbar>
        <ICoinLogo />
        <Menu />
      </Toolbar>
    </AppBar>
  )
}

export { Header }
