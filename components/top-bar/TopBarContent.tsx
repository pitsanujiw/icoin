import { Format } from 'services'
import { IGlobalData } from 'types'
import { makeStyles, Typography } from '@material-ui/core'

interface ITopBarContentProps {
  globalData: IGlobalData
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

const TopBarContent: React.FC<ITopBarContentProps> = ({ globalData }) => {
  const classes = useStyles()
  const { marketTotal, asset } = globalData

  if (marketTotal && asset) {
    const { assets, markets, exchangeVolumeUsd24Hr } = marketTotal
    const marketCap = Format.toNumber(marketTotal, 'marketCapUsd')
    const bitcoinCap = Format.toNumber(asset, 'marketCapUsd')

    return (
      <div className={classes.content}>
        <div className={classes.info}>
          <Typography variant="overline" component="span">
            Assets:&nbsp;
            <Typography variant="overline" component="span" color="primary">
              {assets}
            </Typography>
          </Typography>
          <Typography variant="overline" component="span">
            Markets:&nbsp;
            <Typography variant="overline" component="span" color="primary">
              {markets}
            </Typography>
          </Typography>
          <Typography variant="overline" component="span">
            Market Cap:&nbsp;
            <Typography variant="overline" component="span" color="primary">
              {Format.currency(marketCap)}
            </Typography>
          </Typography>
          <Typography variant="overline" component="span">
            24h Volume:&nbsp;
            <Typography variant="overline" component="span" color="primary">
              {Format.currency(exchangeVolumeUsd24Hr)}
            </Typography>
          </Typography>
          <Typography variant="overline" component="span">
            Dominance:&nbsp;
            <Typography variant="overline" component="span" color="primary">
              BTC {Format.percent((bitcoinCap * 100) / marketCap)}
            </Typography>
          </Typography>
        </div>
      </div>
    )
  }

  return <></>
}

export { TopBarContent }
