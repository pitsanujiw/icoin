import { Chart } from 'services'
import { IAssetHistories, TTime } from 'types'
import { useEffect, useRef } from 'react'
import ChartJS from 'chart.js'

interface ILineChart {
  data: IAssetHistories

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
  let lineChart: ChartJS
  const canvasRef = useRef<HTMLCanvasElement>()

  /**
   * @description Start rendering a new chart
   * @return `ChartJS`
   */
  const renderChart = () => {
    const { assetHistories } = data
    lineChart = Chart.createNewChart(canvasRef.current, time, assetHistories)
  }

  useEffect(() => {
    if (data) {
      lineChart?.destroy()
      renderChart()
    }

    /**
     * @description
     * After unmounting the component, we need to destroy the chart as well
     * For saving some resource and improve performance
     */
    return () => lineChart?.destroy()
  }, [data])

  return <canvas id="icoin-chart" ref={canvasRef} />
}

export { LineChart }
