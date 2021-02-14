import { Format, Chart } from 'services'
import { IAssetHistories, ICommonRouteParams } from 'types'
import { Paper, Divider, makeStyles } from '@material-ui/core'
import {
  AssetHighLow,
  AssetSummary,
  ContainerWrapper,
  LineChart,
  TimeSelection,
  useTime
} from 'components'
import { useEffect, useState } from 'react'
import { useLazyQuery, COIN_CHART } from 'apollo'

const useStyles = makeStyles(
  theme => ({
    section: {
      display: 'flex'
    },

    information: {
      minWidth: theme.spacing(35),
      marginRight: theme.spacing(3)
    },

    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: 1,
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    },

    timeSelection: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }
  }),
  {
    name: 'AssetDetailContent'
  }
)

const AssetDetailContent: React.FC<ICommonRouteParams> = ({
  id
}): React.ReactElement => {
  const classes = useStyles()
  const { time, onTimeChange } = useTime()
  const [getIntervals, { data }] = useLazyQuery<IAssetHistories>(COIN_CHART)
  const [histories, setHistories] = useState<IAssetHistories>()
  const isPositive = Format.toNumber(histories, 'asset.changePercent24Hr') > 0

  useEffect(() => {
    const interval = Chart.calculateInterval(id, time)
    getIntervals({ variables: interval })
  }, [time])

  useEffect(() => {
    if (data) {
      setHistories(data)
    }
  }, [data])

  return (
    <ContainerWrapper>
      <div className={classes.section}>
        <Paper className={classes.information}>
          <AssetHighLow data={histories} />
          <Divider light />
          <AssetSummary id={id} />
        </Paper>
        <Paper className={classes.wrapper}>
          <LineChart isPositive={isPositive} time={time} data={histories} />
          <div className={classes.timeSelection}>
            <TimeSelection time={time} onTimeChange={onTimeChange} />
          </div>
        </Paper>
      </div>
    </ContainerWrapper>
  )
}

export { AssetDetailContent }
