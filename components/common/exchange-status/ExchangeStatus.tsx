import { formatDistance, parseISO } from 'date-fns'
import { IExchangeNode } from 'types'
import { isNumber, isString } from 'lodash'
import { Tooltip, IconButton, makeStyles } from '@material-ui/core'
import clsx from 'clsx'

type TExchangeStatusProps = Pick<IExchangeNode, 'updatedAt'>

const useStyles = makeStyles(
  theme => ({
    status: {
      width: theme.spacing(1.5),
      height: theme.spacing(1.5),
      margin: '0 auto',
      borderRadius: '100%'
    },

    available: {
      backgroundColor: theme.palette.success.light
    },

    notAvailable: {
      backgroundColor: theme.palette.error.light
    }
  }),
  {
    name: 'ExchangeStatus'
  }
)

const ExchangeStatus: React.FC<Partial<TExchangeStatusProps>> = ({
  updatedAt
}): React.ReactElement => {
  const classes = useStyles()

  const getTooltipTitle = () => {
    if (isNumber(updatedAt)) {
      return formatDistance(updatedAt, Date.now(), { addSuffix: true })
    }

    if (isString(updatedAt)) {
      const date = parseISO(updatedAt)
      return formatDistance(date, Date.now(), { addSuffix: true })
    }

    return 'Not available'
  }

  return (
    <Tooltip title={getTooltipTitle()} placement="right">
      <IconButton size="small">
        <div
          className={clsx(classes.status, {
            [classes.available]: !!updatedAt,
            [classes.notAvailable]: !updatedAt
          })}
        />
      </IconButton>
    </Tooltip>
  )
}

export { ExchangeStatus }
