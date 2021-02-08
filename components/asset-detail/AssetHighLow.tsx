import { Grid, Typography, Box, makeStyles } from '@material-ui/core'
import { IAssetHistories } from 'types'
import { Price, Format } from 'services'
import { Render } from 'use-react-common'
import { SymbolIcon } from 'components'
import { ValueColor } from 'components/common/value-color/ValueColor'

interface IAssetHighLowProps {
  data: IAssetHistories
}

const useStyles = makeStyles(
  theme => ({
    iconWrapper: {
      maxWidth: theme.spacing(16),
      display: 'flex',
      justifyContent: 'center'
    },

    icon: {
      width: theme.spacing(8)
    }
  }),
  {
    name: 'AssetHighLow'
  }
)

const AssetHighLow: React.FC<IAssetHighLowProps> = ({
  data
}): React.ReactElement => {
  const classes = useStyles()

  return Render.ensure(readyData => {
    const { asset, assetHistories } = readyData
    const { name, symbol, changePercent24Hr } = asset
    const high = Price.max(assetHistories)
    const low = Price.min(assetHistories)
    /**
     * @description High and low are even Number type
     * But it's actually a (string) number
     * So we need to convert by using Number(..) before calculating
     */
    const average = (Number(high) + Number(low)) / 2

    return (
      <Grid alignItems="center" container>
        <Grid xs={12} sm={2} item>
          <div className={classes.iconWrapper}>
            <SymbolIcon
              type="black"
              name={name}
              symbol={symbol}
              className={classes.icon}
            />
          </div>
        </Grid>
        <Grid xs={12} sm={10} item>
          <Grid container>
            <Grid xs={12} sm={3} item>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                High
              </Typography>
              <Typography variant="h6">
                <Box fontWeight="fontWeightBold" component="span">
                  {Format.currency(high)}
                </Box>
              </Typography>
            </Grid>
            <Grid xs={12} sm={3} item>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                <Box>Low</Box>
              </Typography>
              <Typography variant="h6">
                <Box fontWeight="fontWeightBold" component="span">
                  {Format.currency(low)}
                </Box>
              </Typography>
            </Grid>
            <Grid xs={12} sm={3} item>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                <Box>Average</Box>
              </Typography>
              <Typography variant="h6">
                <Box fontWeight="fontWeightBold" component="span">
                  {Format.currency(average)}
                </Box>
              </Typography>
            </Grid>
            <Grid xs={12} sm={3} item>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                <Box>Change</Box>
              </Typography>
              <Typography variant="h6">
                <ValueColor value={changePercent24Hr}>
                  <Box fontWeight="fontWeightBold" component="span">
                    {Format.percent(changePercent24Hr)}
                  </Box>
                </ValueColor>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }, data)
}

export { AssetHighLow }
