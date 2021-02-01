import { AssetNameAndDescription } from 'components'
import { Format, numberFormatter } from 'services'
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
  } = asset

  return (
    <>
      <TableRow className={classes.asset}>
        <TableCell>
          <Typography variant="button">{rank}.</Typography>
        </TableCell>
        <TableCell>
          <AssetNameAndDescription symbol={symbol} name={name} />
        </TableCell>
        <TableCell align="right">{Format.currency(marketCapUsd)}</TableCell>
        <TableCell align="right">{Format.currency(priceUsd)}</TableCell>
        <TableCell align="right">{numberFormatter.format(supply)}</TableCell>
        <TableCell align="right">{Format.currency(volumeUsd24Hr)}</TableCell>
        <TableCell align="right">{Format.percent(changePercent24Hr)}</TableCell>
        <TableCell align="right">Price Graph</TableCell>
      </TableRow>
      <TableRow className={classes.spacer} />
    </>
  )
}

export { AssetItem }
