import Router from 'next/router'
import { Fade, makeStyles } from '@material-ui/core'
import { ICommonProps } from 'types'
import { RingLoader } from 'react-spinners'
import { useEffect, useState } from 'react'
import { useTheme } from 'components'

const useStyles = makeStyles(
  theme => ({
    loading: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      backgroundColor: theme.palette.common.white,
      zIndex: 1103,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }
  }),
  {
    name: 'RouteLoading'
  }
)

const RouteLoading: React.FC = ({ children }): React.ReactElement => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoading(true))

    Router.events.on('routeChangeComplete', () => setLoading(false))

    Router.events.on('routeChangeError', () => setLoading(false))
  }, [Router])

  return (
    <section>
      {children}
      <RouterLoadingContent loading={loading} />
    </section>
  )
}

const RouterLoadingContent: React.FC<ICommonProps> = ({
  loading
}): React.ReactElement => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Fade in={loading}>
      <div className={classes.loading}>
        <RingLoader color={theme.palette.secondary.main} />
      </div>
    </Fade>
  )
}

export { RouteLoading, RouterLoadingContent }
