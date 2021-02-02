import { CDN } from 'services'
import { IAsset } from 'types'
import { Img } from 'react-image'
import { Typography, makeStyles } from '@material-ui/core'

interface IAssetNameAndDescriptionProps
  extends Pick<IAsset, 'symbol' | 'name'> {}

const useStyles = makeStyles(
  (theme) => ({
    name: {
      display: 'flex',
      alignItems: 'center',

      '& > img': {
        paddingRight: theme.spacing(2),
      },
    },
  }),
  {
    name: 'AssetNameAndDescription',
  }
)

const AssetNameAndDescription: React.FC<IAssetNameAndDescriptionProps> = ({
  symbol,
  name,
}) => {
  const classes = useStyles()

  return (
    <div className={classes.name}>
      <Img
        src={[CDN.getIcon(symbol.toLowerCase()), CDN.defaultIcon]}
        alt={name}
      />
      <div>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="caption">{symbol}</Typography>
      </div>
    </div>
  )
}

export { AssetNameAndDescription }
