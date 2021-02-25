import { Chart, Format } from 'services'
import { IAssetHistories, TTime } from 'types'
import { merge, first } from 'lodash'
import { useChartDataSets } from 'components'
import { useEffect, useRef } from 'react'
import { useWindowSize } from 'use-react-common'
import ChartJS, { ChartData, ChartTooltipItem } from 'chart.js'

interface ILineChart {
  data: IAssetHistories

  time: TTime

  isPositive: boolean
}

/**
 * @description Render a line chart
 *
 * @param data List of asset history
 *
 * @param time A time is selected from TimeSelection, It's used for detecting time scale on the chart
 */
const LineChart: React.FC<ILineChart> = ({
  data,
  isPositive,
  time
}): React.ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>()
  const chartDataSets = useChartDataSets(isPositive)
  const instance: ChartJS = Chart.instance
  const size = useWindowSize()

  /**
   * Custom label inside the tooltip
   *
   * @param tooltipItem Contains tooltip item information
   *
   */
  const customTooltipLabel = (tooltipItem: ChartTooltipItem) => {
    const label = Format.currency(Format.toNumber(tooltipItem, 'value'))
    return label
  }

  /**
   * @description Start rendering a new chart
   * @return `ChartJS`
   */
  const renderChart = () => {
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
   * @description This useEffect to resize the chart when the size of the window was changed
   */
  useEffect(() => {
    if (instance) instance.resize()
  }, [size])

  /**
   * @description This useEffect for cleaning up the chart instances
   */
  useEffect(() => {
    /**
     * @description
     * After unmounting the component, we need to destroy the chart as well
     * For saving some resource and improve performance
     */
    return () => {
      for (const index in Chart.instances) {
        ChartJS.instances[index].destroy()
      }
    }
  }, [])

  return <canvas id="icoin-chart" ref={canvasRef} />
}

export { LineChart }
