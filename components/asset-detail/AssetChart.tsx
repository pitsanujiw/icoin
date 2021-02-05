import { Chart } from 'services'
import { IAssetHistories, ICommonRoutePrams } from 'types'
import { makeStyles } from '@material-ui/core'
import { TimeSelection, ContainerWrapper, LineChart } from 'components'
import { useEffect } from 'react'
import { useLazyQuery, COIN_CHART } from 'apollo'
import { useTime } from 'components'

const useStyles = makeStyles(theme => ({
  timeSelection: {
    paddingTop: theme.spacing(4)
  }
}))

const AssetChart: React.FC<ICommonRoutePrams> = ({
  id
}): React.ReactElement => {
  const classes = useStyles()
  const { time, onTimeChange } = useTime()
  const [getIntervals, { data }] = useLazyQuery<IAssetHistories>(COIN_CHART)

  useEffect(() => {
    const interval = Chart.calculateInterval(id, time)
    getIntervals({ variables: interval })
  }, [time])

  return (
    <ContainerWrapper>
      <LineChart time={time} data={data} />
      <section className={classes.timeSelection}>
        <TimeSelection time={time} onTimeChange={onTimeChange} />
      </section>
    </ContainerWrapper>
  )
}

export { AssetChart }
