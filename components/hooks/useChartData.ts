import { ChartDataSets } from 'chart.js'
import { fade } from '@material-ui/core'
import { useTheme } from 'components'

const useChartDataSets = (): ChartDataSets[] => {
  const theme = useTheme()

  return [
    {
      backgroundColor: fade(theme.palette.secondary.main, 0.5),
      borderColor: theme.palette.secondary.main,
      borderJoinStyle: 'round',
      borderCapStyle: 'round',
      borderWidth: 3,
      pointHitRadius: 3,
      pointRadius: 0,
      lineTension: 0
    }
  ]
}

export { useChartDataSets }
