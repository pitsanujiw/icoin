import {
  Container,
  Typography,
  Button,
  Link,
  Grid,
  Box,
  makeStyles
} from '@material-ui/core'
import { Format, numberFormatter } from 'services'
import { ICommonRoutePrams, IAssetSummary } from 'types'
import { Render } from 'use-react-common'
import { usePriceDirection } from 'components'
import { useQuery, COIN_INFORMATION } from 'apollo'
import StarIcon from '@material-ui/icons/Star'

interface IAssetSummaryContent extends ICommonRoutePrams {
  summary: IAssetSummary
}

const useStyles = makeStyles(
  theme => ({
    wrapper: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      backgroundColor: theme.palette.primary.light
    },

    container: {
      color: theme.palette.common.white
    },

    information: {
      paddingBottom: theme.spacing(3)
    },

    firstRow: {
      paddingBottom: theme.spacing()
    }
  }),
  {
    name: 'AssetSummary'
  }
)

const AssetSummary: React.FC<ICommonRoutePrams> = ({ id }) => {
  const { data } = useQuery<IAssetSummary>(COIN_INFORMATION, {
    variables: { id }
  })

  return Render.ensure(
    summary => <AssetSummaryContent id={id} summary={summary} />,
    data
  )
}

const AssetSummaryContent: React.FC<IAssetSummaryContent> = ({
  id,
  summary
}) => {
  const {
    explorer,
    marketCapUsd,
    name,
    priceUsd,
    rank,
    supply,
    symbol,
    volumeUsd24Hr,
    website
  } = summary.asset
  const classes = useStyles()
  const { price } = usePriceDirection(id, priceUsd)

  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <Grid container>
          <Grid className={classes.information} spacing={2} container>
            <Grid item>
              <Button
                startIcon={<StarIcon />}
                color="primary"
                variant="contained"
                disableElevation
              >
                Rank {rank}
              </Button>
            </Grid>
            <Grid item>
              <Link href={explorer} color="inherit" target="_blank">
                <Button color="primary" variant="contained" disableElevation>
                  Explorer
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href={website} color="inherit" target="_blank">
                <Button color="primary" variant="contained" disableElevation>
                  Website
                </Button>
              </Link>
            </Grid>
          </Grid>
          <Grid spacing={2} container>
            <Grid xs={12} sm={3} item>
              <Typography variant="h5" className={classes.firstRow}>
                {name} ({symbol})
              </Typography>
              <Typography variant="h5">
                <Box fontWeight="fontWeightBold">{Format.currency(price)}</Box>
              </Typography>
            </Grid>
            <Grid xs={12} sm={3} item>
              <Typography variant="h5" className={classes.firstRow}>
                Market Cap
              </Typography>
              <Typography variant="h5">
                <Box fontWeight="fontWeightBold">
                  {Format.bigNumber(marketCapUsd)}
                </Box>
              </Typography>
            </Grid>
            <Grid xs={12} sm={3} item>
              <Typography variant="h5" className={classes.firstRow}>
                Volume (24h)
              </Typography>
              <Typography variant="h5">
                <Box fontWeight="fontWeightBold">
                  {Format.bigNumber(volumeUsd24Hr)}
                </Box>
              </Typography>
            </Grid>
            <Grid xs={12} sm={3} item>
              <Typography variant="h5" className={classes.firstRow}>
                Supply
              </Typography>
              <Typography variant="h5">
                <Box fontWeight="fontWeightBold">
                  {numberFormatter.format(supply)}
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export { AssetSummary }
export { AssetSummaryContent }
