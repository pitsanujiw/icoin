import { IAsset } from 'types'
import { Typography, Box, makeStyles } from '@material-ui/core'

type TAssetRankBoxProps = Pick<IAsset, 'rank'>

const useStyles = makeStyles(
  theme => ({
    rank: {
      maxWidth: theme.spacing(16)
    }
  }),
  {
    name: 'AssetRankBox'
  }
)

const AssetRankBox: React.FC<TAssetRankBoxProps> = ({ rank }) => {
  const classes = useStyles()

  return (
    <div className={classes.rank}>
      <Typography variant="h4">
        <Box fontWeight="fontWeightBold">Rank</Box>
      </Typography>
      <Typography variant="h3">
        <Box fontWeight="fontWeightBold">{rank}</Box>
      </Typography>
    </div>
  )
}

export { AssetRankBox }
