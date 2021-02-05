import { IAsset } from 'types'
import { Typography, makeStyles } from '@material-ui/core'

type TAssetRankBoxProps = Pick<IAsset, 'rank'>

const useStyles = makeStyles(
  theme => ({
    rank: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      border: '2px solid',
      padding: `${theme.spacing(2)}px 0`,
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
      <Typography variant="h5">Rank</Typography>
      <Typography variant="h3">{rank}</Typography>
    </div>
  )
}

export { AssetRankBox }
