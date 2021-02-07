import { Grid, makeStyles } from '@material-ui/core'
import { Route } from 'components'
import { Routes } from 'services'
import React from 'react'

const useStyles = makeStyles(
  () => ({
    menu: {
      display: 'flex',
      justifyContent: 'space-evenly'
    }
  }),
  {
    name: 'Menu'
  }
)

const Menu = (): React.ReactElement => {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid xs={12} sm={8} lg={4} item>
        <div className={classes.menu}>
          <Route href={Routes.home} title="Market Cap" />
          <Route href={Routes.tradingVolume} title="Trading Volume" />
          <Route href={Routes.trending} title="Trending" />
        </div>
      </Grid>
    </Grid>
  )
}

export { Menu }
