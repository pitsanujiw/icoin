import { AssetNameAndDescription, usePriceDirection } from 'components'
import { Format, numberFormatter, PriceDirection } from 'services'
import { DURATION } from 'data'
import { IAsset } from 'types'
import {
  TableRow,
  TableCell,
  Typography,
  makeStyles,
  fade,
} from '@material-ui/core'
import clsx from 'clsx'

interface IAssetItemProps {
  asset: IAsset
}

const useStyles = makeStyles(
  (theme) => ({
    asset: {
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.shape.borderRadius,
      transition: theme.transitions.create(['background-color'], {
        duration: DURATION,
      }),

      '& > td:first-child': {
        borderTopLeftRadius: theme.shape.borderRadius,
        borderBottomLeftRadius: theme.shape.borderRadius,
      },

      '& > td:last-child': {
        borderTopRightRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
      },
    },

    up: {
      backgroundColor: fade(theme.palette.success.light, 0.08),
    },

    down: {
      backgroundColor: fade(theme.palette.error.light, 0.08),
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
    changePercent24Hr,
    id,
    marketCapUsd,
    name,
    priceUsd,
    rank,
    supply,
    symbol,
    volumeUsd24Hr,
  } = asset
  const { price, direction } = usePriceDirection(id, priceUsd)

  return (
    <>
      <TableRow
        className={clsx(classes.asset, {
          [classes.up]: direction === PriceDirection.UP,
          [classes.down]: direction === PriceDirection.DOWN,
        })}
      >
        <TableCell>
          <Typography variant="button">{rank}.</Typography>
        </TableCell>
        <TableCell>
          <AssetNameAndDescription symbol={symbol} name={name} />
        </TableCell>
        <TableCell align="right">
          <Typography variant="button">
            {Format.bigNumber(marketCapUsd)}
          </Typography>
        </TableCell>
        <TableCell align="right">
          <Typography variant="button">{Format.currency(price)}</Typography>
        </TableCell>
        <TableCell align="right">
          <Typography variant="button">
            {numberFormatter.format(supply)} {symbol}
          </Typography>
        </TableCell>
        <TableCell align="right">
          <Typography variant="button">
            {Format.bigNumber(volumeUsd24Hr)}
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
