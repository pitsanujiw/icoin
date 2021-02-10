import { Chart, Format } from 'services'
import { IAssetHistory, TTime } from 'types'
import { merge, first, find } from 'lodash'
import { useChartDataSets } from 'components'
import { useEffect, useRef } from 'react'
import ChartJS, { ChartData, ChartTooltipItem } from 'chart.js'

interface ILineChart {
  data: IAssetHistory

  time: TTime
}

/**
 * @description Render a line chart
 *
 * @param data List of asset history
 *
 * @param time A time is selected from TimeSelection, It's used for detecting time scale on the chart
 */
const LineChart: React.FC<ILineChart> = ({
  time,
  data
}): React.ReactElement => {
  const chartDataSets = useChartDataSets()
  const canvasRef = useRef<HTMLCanvasElement>()

  /**
   * Custom label inside the tooltip
   *
   * @param tooltipItem Contains tooltip item information
   *
   */
  const customTooltipLabel = (tooltipItem: ChartTooltipItem) => {
    const label = Format.currency(Number(tooltipItem.value))
    return label
  }

  /**
   * @description Start rendering a new chart
   * @return `ChartJS`
   */
  const renderChart = () => {
    const instance: ChartJS = find(ChartJS.instances)
    const { assetHistories } = data
    /**
     * @description Create chart data with default styling
     */
    const chartData: ChartData = Chart.createChartData(assetHistories)
    /**
     * @description Merge the default styling with custom styling
     */
    merge(chartData.datasets, chartDataSets)

    /**
     * @description Check if the chart already created, then we just need to update the data
     */
    if (instance) {
      instance.data = chartData
      first(instance.options.scales.xAxes).time = Chart.createTimeScale(time)

      instance.update()
    } else {
      Chart.createNewChart(canvasRef.current, time, chartData, {
        tooltips: {
          callbacks: {
            label: customTooltipLabel
          }
        }
      })
    }
  }

  useEffect(() => {
    if (data) {
      renderChart()
    }
  }, [data])

  /**
   * @description This useEffect for cleaning up the chart instances
   */
  useEffect(() => {
    /**
     * @description
     * After unmounting the component, we need to destroy the chart as well
     * For saving some resource and improve performance
     */
    return () => find(ChartJS.instances).destroy()
  }, [])

  return <canvas id="icoin-chart" ref={canvasRef} />
}

export { LineChart }
