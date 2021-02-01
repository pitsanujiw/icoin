import { AssetNameAndDescription } from 'components'
import { Format } from 'services'
import { IAsset } from 'types'
import { TableRow, TableCell, Typography, makeStyles } from '@material-ui/core'

interface IAssetItemProps {
  asset: IAsset
}

const useStyles = makeStyles(
  (theme) => ({
    asset: {
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.shape.borderRadius,
    },

    spacer: {
      height: theme.spacing(2),
    },
  }),
  {
    name: 'AssetItem',
  }
)

const AssetItem: React.FC<IAssetItemProps> = ({ asset }) => {
  const classes = useStyles()

  const {
    symbol,
    rank,
    name,
    marketCapUsd,
    supply,
    priceUsd,
    volumeUsd24Hr,
    changePercent24Hr,
    explorer,
  } = asset

  return (
    <>
      <TableRow className={classes.asset}>
        <TableCell>
          <Typography variant="button">{rank}.</Typography>
        </TableCell>
        <TableCell>
          <AssetNameAndDescription
            symbol={symbol}
            name={name}
            explorer={explorer}
          />
        </TableCell>
        <TableCell align="right">
          <Typography variant="button">
            {Format.currency(marketCapUsd)}
          </Typography>
        </TableCell>
        <TableCell align="right">
          <Typography variant="button">{Format.currency(priceUsd)}</Typography>
        </TableCell>
        <TableCell align="right">
          <Typography variant="button">
            {Format.currency(supply)} {symbol}
          </Typography>
        </TableCell>
        <TableCell align="right">
          <Typography variant="button">
            {Format.currency(volumeUsd24Hr)}
          </Typography>
        </TableCell>
        <TableCell align="right">
          <Typography variant="button">
            {Format.percent(changePercent24Hr)}
          </Typography>
        </TableCell>
        <TableCell align="right">Price Graph</TableCell>
      </TableRow>
      <TableRow className={classes.spacer} />
    </>
  )
}

export { AssetItem }
