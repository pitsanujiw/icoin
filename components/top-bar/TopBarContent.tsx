import { Format } from 'services'
import { IGlobalData } from 'types/global'
import { makeStyles, Typography } from '@material-ui/core'

interface ITopBarContentProps {
  data: IGlobalData
}

const useStyles = makeStyles(
  theme => ({
    content: {
      display: 'flex',
      flex: 1
    },

    info: {
      '& > span': {
        paddingRight: theme.spacing(2)
      }
    }
  }),
  {
    name: 'TopBarContent'
  }
)

const TopBarContent: React.FC<ITopBarContentProps> = ({ data }) => {
  const classes = useStyles()

  return (
    <div className={classes.content}>
      <div className={classes.info}>
        <Typography variant="caption" component="span">
          Cryptocurrencies:&nbsp;
          <Typography variant="caption" component="span" color="primary">
            {data.active_cryptocurrencies}
          </Typography>
        </Typography>
        <Typography variant="caption" component="span">
          Markets:&nbsp;
          <Typography variant="caption" component="span" color="primary">
            {data.markets}
          </Typography>
        </Typography>
        <Typography variant="caption" component="span">
          Market Cap:&nbsp;
          <Typography variant="caption" component="span" color="primary">
            {Format.currency(data.total_market_cap.usd)}
          </Typography>
        </Typography>
        <Typography variant="caption" component="span">
          24h Volume:&nbsp;
          <Typography variant="caption" component="span" color="primary">
            {Format.currency(data.total_volume.usd)}
          </Typography>
        </Typography>
        <Typography variant="caption" component="span">
          Dominance:&nbsp;
          <Typography variant="caption" component="span" color="primary">
            BTC {Format.percent(data.market_cap_percentage.btc)}
          </Typography>
          &nbsp; &nbsp;
          <Typography variant="caption" component="span" color="primary">
            ETH {Format.percent(data.market_cap_percentage.eth)}
          </Typography>
        </Typography>
      </div>
    </div>
  )
}

export { TopBarContent }
