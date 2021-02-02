import { Grid, makeStyles } from '@material-ui/core'
import { Route } from 'components'
import React from 'react'

const useStyles = makeStyles(
  () => ({
    menu: {
      display: 'flex',
      justifyContent: 'space-evenly',
    },
  }),
  {
    name: 'Menu',
  }
)

const Menu = () => {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid xs={12} sm={8} lg={4} item>
        <div className={classes.menu}>
          <Route href="/" title="Market Cap" />
          <Route href="/trading-volume" title="Trading Volume" />
          <Route href="/trending" title="Trending" />
        </div>
      </Grid>
    </Grid>
  )
}

export { Menu }
