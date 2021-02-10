import { AssetNameAndDescription, ValueColor, useLivePrice } from 'components'
import { DURATION } from 'data'
import { Format, numberFormatter, PriceDirection } from 'services'
import { IAsset } from 'types'
import { TableRow, TableCell, makeStyles, fade } from '@material-ui/core'
import { useRouter } from 'next/router'
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
      <TableCell>{rank}.</TableCell>
      <TableCell>
        <AssetNameAndDescription symbol={symbol} name={name} />
      </TableCell>
      <TableCell align="right">{Format.currency(marketCapUsd)}</TableCell>
      <TableCell align="right">{Format.currency(price)} </TableCell>
      <TableCell align="right">{Format.currency(volumeUsd24Hr)}</TableCell>
      <TableCell align="right">
        <ValueColor variant="body2" value={changePercent24Hr}>
          {Format.percent(changePercent24Hr)}
        </ValueColor>
      </TableCell>
      <TableCell align="right">{numberFormatter.format(supply)}</TableCell>
    </TableRow>
  )
}

export { AssetItem }
