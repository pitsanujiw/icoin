import { CDN } from 'services'
import { IAsset } from 'types'
import { Img } from 'react-image'
import { Typography, Button, Link, makeStyles } from '@material-ui/core'
import ExploreIcon from '@material-ui/icons/Explore'

interface IAssetNameAndDescriptionProps
  extends Pick<IAsset, 'symbol' | 'name' | 'explorer'> {}

const useStyles = makeStyles(
  (theme) => ({
    name: {
      display: 'flex',
      alignItems: 'center',
      paddingBottom: theme.spacing(2),

      '& > img': {
        paddingRight: theme.spacing(),
        height: theme.spacing(3.5),
      },
    },

    explorer: {
      textTransform: 'capitalize',
    },
  }),
  {
    name: 'AssetNameAndDescription',
  }
)

const AssetNameAndDescription: React.FC<IAssetNameAndDescriptionProps> = ({
  symbol,
  name,
  explorer,
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.name}>
        <Img
          src={[CDN.getIcon(symbol.toLowerCase()), CDN.defaultIcon]}
          alt={name}
        />
        <Typography variant="h6">{name}</Typography>
      </div>
      <Button startIcon={<ExploreIcon />}>
        <Link
          className={classes.explorer}
          href={explorer}
          color="inherit"
          target="_blank"
        >
          Explorer
        </Link>
      </Button>
    </div>
  )
}

export { AssetNameAndDescription }
