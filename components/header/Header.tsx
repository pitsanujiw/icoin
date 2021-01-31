import { AppBar, Toolbar } from '@material-ui/core'
import { ICoinLogo } from 'components/common'
import React from 'react'

const Header = () => {
  return (
    <AppBar position="relative" color="default" elevation={0}>
      <Toolbar>
        <ICoinLogo />
      </Toolbar>
    </AppBar>
  )
}

export { Header }
