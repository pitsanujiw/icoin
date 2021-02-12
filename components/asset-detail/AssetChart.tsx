import { Chart } from 'services'
import { IAssetHistory, ICommonRouteParams } from 'types'
import { Paper, makeStyles } from '@material-ui/core'
import {
  AssetHighLow,
  ContainerWrapper,
  LineChart,
  TimeSelection,
  useTime
} from 'components'
import { useEffect } from 'react'
import { useLazyQuery, COIN_CHART } from 'apollo'

const useStyles = makeStyles(
  theme => ({
    chartSection: {
      display: 'flex'
    },

    chartWrapper: {
      flex: 1,
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    },

    timeSelection: {
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }
  }),
  {
    name: 'AssetChart'
  }
)

const AssetChart: React.FC<ICommonRouteParams> = ({
  id
}): React.ReactElement => {
  const classes = useStyles()
  const { time, onTimeChange } = useTime()
  const [getIntervals, { data }] = useLazyQuery<IAssetHistory>(COIN_CHART)

  useEffect(() => {
    const interval = Chart.calculateInterval(id, time)
    getIntervals({ variables: interval })
  }, [time])

  return (
    <ContainerWrapper>
      <div className={classes.chartSection}>
        <AssetHighLow data={data} />
        <Paper className={classes.chartWrapper}>
          <LineChart time={time} data={data} />
          <div className={classes.timeSelection}>
            <TimeSelection time={time} onTimeChange={onTimeChange} />
          </div>
        </Paper>
      </div>
    </ContainerWrapper>
  )
}

export { AssetChart }
