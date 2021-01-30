import { API, Format } from 'services'
import { makeStyles, Typography } from '@material-ui/core'
import { useAsync } from 'react-use'

const useStyles = makeStyles(
  (theme) => ({
    topbar: {
      display: 'flex',
      justifyContent: 'space-between',
    },

    info: {
      '& > span': {
        paddingRight: theme.spacing(2),
        fontWeight: theme.typography.button.fontWeight,
      },
    },
  }),
  {
    name: 'TopBar',
  }
)

const TopBar = () => {
  const classes = useStyles()
  const { loading, value } = useAsync(API.getGlobals)

  if (!loading) {
    const { data } = value.data

    return (
      <div className={classes.topbar}>
        <div className={classes.info}>
          <Typography variant="subtitle2" component="span">
            Cryptocurrencies:&nbsp;
            <Typography variant="subtitle2" component="span" color="primary">
              {data.active_cryptocurrencies}
            </Typography>
          </Typography>
          <Typography variant="subtitle2" component="span">
            Markets:&nbsp;
            <Typography variant="subtitle2" component="span" color="primary">
              {data.markets}
            </Typography>
          </Typography>
        </div>
        <div className={classes.info}>
          <Typography variant="subtitle2" component="span">
            Market Cap:&nbsp;
            <Typography variant="subtitle2" component="span" color="primary">
              {Format.currency(data.total_market_cap.usd)}
            </Typography>
          </Typography>
          <Typography variant="subtitle2" component="span">
            24h Volume:&nbsp;
            <Typography variant="subtitle2" component="span" color="primary">
              {Format.currency(data.total_volume.usd)}
            </Typography>
          </Typography>
          <Typography variant="subtitle2" component="span">
            Dominance:&nbsp;
            <Typography variant="subtitle2" component="span" color="primary">
              BTC {data.market_cap_percentage.btc.toFixed(2)}%
            </Typography>
          </Typography>
          <Typography variant="subtitle2" component="span" color="primary">
            ETH {data.market_cap_percentage.eth.toFixed(2)}%
          </Typography>
        </div>
      </div>
    )
  }

  return <></>
}

export { TopBar }
