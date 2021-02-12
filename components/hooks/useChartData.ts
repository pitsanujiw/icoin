import { ChartDataSets } from 'chart.js'
import { fade } from '@material-ui/core'
import { useTheme } from 'components'

const useChartDataSets = (): ChartDataSets[] => {
  const theme = useTheme()

  return [
    {
      fill: 'none',
      backgroundColor: fade(theme.palette.success.light, 0.75),
      borderColor: theme.palette.success.light,
      borderCapStyle: 'round',
      borderJoinStyle: 'round',
      borderWidth: 3,
      lineTension: 0,
      pointHitRadius: 3,
      pointRadius: 0
    }
  ]
}

export { useChartDataSets }
