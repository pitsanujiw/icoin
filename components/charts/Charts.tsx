import { makeStyles, Paper } from '@material-ui/core'
import { useEffect } from 'react'
import { useTheme, ContainerWrapper } from 'components'

const useStyles = makeStyles(
  theme => ({
    container: {
      height: '75vh',
      position: 'relative'
    },

    charts: {
      height: '100%',
      width: '100%'
    },

    overlay: {
      position: 'absolute',
      pointerEvents: 'none',
      border: `1px solid ${theme.palette.common.white}`,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  }),
  {
    name: 'Charts'
  }
)

const Charts = (): React.ReactElement => {
  const classes = useStyles()
  const theme = useTheme()

  const createCharts = () => {
    new TradingView.widget({
      container_id: 'charts',
      symbol: 'BINANCE:BTCUSD',
      timezone: 'exchange',
      theme: 'light',
      style: '1',
      locale: 'en',
      toolbar_bg: theme.palette.background.paper,
      enable_publishing: false,
      allow_symbol_change: true,
      autosize: true
    })
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/tv.js'
    script.async = true
    script.onload = createCharts

    document.body.appendChild(script)

    return () => document.body.removeChild(script)
  }, [])

  return (
    <ContainerWrapper>
      <Paper className={classes.container}>
        <div id="charts" className={classes.charts} />
        <div className={classes.overlay} />
      </Paper>
    </ContainerWrapper>
  )
}

export { Charts }
