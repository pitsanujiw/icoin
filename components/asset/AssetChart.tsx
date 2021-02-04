import { Chart } from 'services'
import { IAssetHistories, ICommonRoutePrams } from 'types'
import { TimeSelection, ContainerWrapper, LineChart } from 'components'
import { useEffect } from 'react'
import { useLazyQuery, COIN_CHART } from 'apollo'
import { useTime } from 'components'

const AssetChart: React.FC<ICommonRoutePrams> = ({
  id
}): React.ReactElement => {
  const { time, onTimeChange } = useTime()
  const [getIntervals, { data }] = useLazyQuery<IAssetHistories>(COIN_CHART)

  useEffect(() => {
    const interval = Chart.calculateInterval(id, time)
    getIntervals({ variables: interval })
  }, [time])

  return (
    <ContainerWrapper>
      <LineChart time={time} data={data} />
      <TimeSelection time={time} onTimeChange={onTimeChange} />
    </ContainerWrapper>
  )
}

export { AssetChart }
