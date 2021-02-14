import { ChartDataSets } from 'chart.js'
import { fade } from '@material-ui/core'
import { useTheme } from 'components'

const useChartDataSets = (isPositive = true): ChartDataSets[] => {
  const { palette } = useTheme()
  const color = isPositive ? palette.success.light : palette.error.light

  return [
    {
      fill: 'none',
      backgroundColor: fade(color, 0.75),
      borderColor: color,
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
