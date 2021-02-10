import { Chart } from 'services'
import { IAssetHistory, ICommonRouteParams } from 'types'
import { makeStyles } from '@material-ui/core'
import {
  AssetHighLow,
  ContainerWrapper,
  LineChart,
  PaperWrapper,
  TimeSelection,
  useTime
} from 'components'
import { useEffect } from 'react'
import { useLazyQuery, COIN_CHART } from 'apollo'

const useStyles = makeStyles(
  theme => ({
    chartSection: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(4)
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
      <PaperWrapper>
        <AssetHighLow data={data} />
      </PaperWrapper>
      <div className={classes.chartSection}>
        <LineChart time={time} data={data} />
      </div>
      <TimeSelection time={time} onTimeChange={onTimeChange} />
    </ContainerWrapper>
  )
}

export { AssetChart }
