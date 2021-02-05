import { AssetNameAndDescription, ValueColor, useLivePrice } from 'components'
import { useRouter } from 'next/router'
import { Format, numberFormatter, PriceDirection } from 'services'
import { DURATION } from 'data'
import { IAsset } from 'types'
import {
  TableRow,
  TableCell,
  Typography,
  makeStyles,
  fade
} from '@material-ui/core'
import clsx from 'clsx'

interface IAssetItemProps {
  asset: IAsset
}

const useStyles = makeStyles(
  theme => ({
    asset: {
      cursor: 'pointer',
      borderRadius: theme.shape.borderRadius,
      transition: theme.transitions.create(['background-color'], {
        duration: DURATION
      })
    },

    up: {
      backgroundColor: fade(theme.palette.success.light, 0.1)
    },

    down: {
      backgroundColor: fade(theme.palette.error.light, 0.1)
    }
  }),
  {
    name: 'AssetItem'
  }
)

const AssetItem: React.FC<IAssetItemProps> = ({ asset }) => {
  const classes = useStyles()
  const router = useRouter()
  const {
    changePercent24Hr,
    id,
    marketCapUsd,
    name,
    priceUsd,
    rank,
    supply,
    symbol,
    volumeUsd24Hr
  } = asset
  const { price, direction } = useLivePrice(id, priceUsd)

  const onClick = () => router.push(`/asset/${id}`)

  return (
    <TableRow
      onClick={onClick}
      className={clsx(classes.asset, {
        [classes.up]: direction === PriceDirection.UP,
        [classes.down]: direction === PriceDirection.DOWN
      })}
    >
      <TableCell>
        <Typography variant="subtitle2">{rank}.</Typography>
      </TableCell>
      <TableCell>
        <AssetNameAndDescription symbol={symbol} name={name} />
      </TableCell>
      <TableCell align="right">
        <Typography variant="subtitle2">
          {Format.bigNumber(marketCapUsd)}
        </Typography>
      </TableCell>
      <TableCell align="right">
        <Typography variant="subtitle2">{Format.currency(price)}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography variant="subtitle2">
          {numberFormatter.format(supply)}
        </Typography>
      </TableCell>
      <TableCell align="right">
        <Typography variant="subtitle2">
          {Format.bigNumber(volumeUsd24Hr)}
        </Typography>
      </TableCell>
      <TableCell align="right">
        <ValueColor variant="subtitle2" value={changePercent24Hr}>
          {Format.percent(changePercent24Hr)}
        </ValueColor>
      </TableCell>
    </TableRow>
  )
}

export { AssetItem }
