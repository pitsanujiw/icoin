import { Grid, makeStyles } from '@material-ui/core'
import { RouteDesktop } from 'components'
import { Routes } from 'services'
import React from 'react'

const useStyles = makeStyles(
  theme => ({
    menu: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    }
  }),
  {
    name: 'MenuDesktop'
  }
)

const MenuDesktop = (): React.ReactElement => {
  const classes = useStyles()

  return (
    <Grid className={classes.menu} spacing={2} container>
      <Grid item>
        <RouteDesktop href={Routes.home} title="Market Cap" />
      </Grid>
      <Grid item>
        <RouteDesktop href={Routes.exchanges} title="Exchanges" />
      </Grid>
      <Grid item>
        <RouteDesktop href={Routes.charts} title="Charts" />
      </Grid>
    </Grid>
  )
}

export { MenuDesktop }
