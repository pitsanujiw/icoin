import { MenuDesktop, MenuMobile } from 'components'
import { useMediaQuery, Theme } from '@material-ui/core'

import React from 'react'

const Menu = (): React.ReactElement => {
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))

  if (matches) {
    return <MenuDesktop />
  }

  return <MenuMobile />
}

export { Menu }
