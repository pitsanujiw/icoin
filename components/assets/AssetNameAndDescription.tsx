import { TSymbol } from 'types'
import { Typography, makeStyles } from '@material-ui/core'
import { SymbolIcon } from 'components'

type IAssetNameAndDescriptionProps = TSymbol

const useStyles = makeStyles(
  theme => ({
    name: {
      display: 'flex',
      alignItems: 'center'
    },

    icon: {
      width: theme.spacing(6),
      paddingRight: theme.spacing(2)
    }
  }),
  {
    name: 'AssetNameAndDescription'
  }
)

const AssetNameAndDescription: React.FC<IAssetNameAndDescriptionProps> = ({
  symbol,
  name
}) => {
  const classes = useStyles()

  return (
    <div className={classes.name}>
      <SymbolIcon name={name} symbol={symbol} className={classes.icon} />
      <div>
        <Typography variant="button" component="p">
          {name}
        </Typography>
        <Typography variant="caption">{symbol}</Typography>
      </div>
    </div>
  )
}

export { AssetNameAndDescription }
