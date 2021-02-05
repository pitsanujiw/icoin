/**
 * Author: Andy D. Ng <itc.anhduy@gmail.com>
 * Chart.js contains the useful function to manage a Chart
 */

import { ChartData, ChartOptions, TimeScale } from 'chart.js'
import { IAssetHistory, ICalculateInterval, TTime } from 'types'
import { merge } from 'lodash'
import { sub } from 'date-fns'
import { TIME_TO_INTERVAL } from 'data'
import ChartJS from 'chart.js'

/**
 * @description
 * We are using Roboto font and
 * Set it here for the ChartJS as well
 */
ChartJS.defaults.global.defaultFontFamily = "'Inter', sans-serif"

const Chart = {
  /**
   * @description Calculate interval post data by id, time, start and end date
   *
   * @param id The id of coin such as: bitcoin, ethereum
   *
   * @param time The time from the TimeSelection component - (Check TTime in chart.d.ts)
   *
   * @returns `ICalculateInterval`
   *
   * @example
   * ```
   *    const { time, onTimeChange } = useTime()
   *     const [getIntervals, { data }] = useLazyQuery<IAssetHistories>(COIN_CHART)
   *
   *     useEffect(() => {
   *       const interval = Chart.calculateInterval(id, time)
   *       getIntervals({ variables: interval })
   *     }, [time])
   *```
   */
  calculateInterval: (id: string, time: TTime): ICalculateInterval => {
    let subtractDate: Date
    const end = Date.now()

    switch (time) {
      case '1D':
        subtractDate = sub(end, { days: 1 })
        break
      case '1W':
        subtractDate = sub(end, { weeks: 1 })
        break
      case '1M':
        subtractDate = sub(end, { months: 1 })
        break
      case '3M':
        subtractDate = sub(end, { months: 3 })
        break
      case '6M':
        subtractDate = sub(end, { months: 6 })
        break
      case '1Y':
      case 'ALL':
        subtractDate = sub(end, { years: 1 })
        break
    }

    return {
      end,
      id,
      interval: TIME_TO_INTERVAL[time],
      start: subtractDate.valueOf()
    }
  },

  /**
   * @description Create time scale with unit for Line Chart
   *
   * @param time The time from the TimeSelection component - (Check TTime in chart.d.ts)
   *
   * @returns `TimeScale`
   */
  createTimeScale: (time: TTime): TimeScale => {
    const timeScale: TimeScale = {}

    switch (time) {
      case '1D':
        timeScale.unit = 'hour'
        break
      case '1W':
        timeScale.unit = 'day'
        break
      case '1M':
      case '3M':
        timeScale.unit = 'week'
        break
      case '6M':
      case '1Y':
      case 'ALL':
        timeScale.unit = 'month'
        break
    }

    return timeScale
  },

  /**
   * @description Create a new chart
   *
   * @param ctx The canvas rendering context
   *
   * @param assetHistories Contains the list history data such as: timestamp, priceUsd, etc...
   *
   * @param options The chart options, it will be merged with the default options
   *
   * @returns `ChartJS`
   */
  createNewChart: (
    canvas: HTMLCanvasElement,
    time: TTime,
    chartData: ChartData,
    options?: ChartOptions
  ): ChartJS => {
    const ctx = canvas.getContext('2d')

    return new ChartJS(ctx, {
      type: 'line',
      data: chartData,
      options: merge(
        {
          tooltips: {
            position: 'nearest'
          },
          legend: {
            display: false
          },
          scales: {
            xAxes: [
              {
                type: 'time',
                time: Chart.createTimeScale(time),
                gridLines: {
                  display: false
                }
              }
            ],
            yAxes: [
              {
                position: 'right',
                gridLines: {
                  drawBorder: false
                }
              }
            ]
          }
        },
        options
      )
    })
  },

  /**
   * @description Create chart data
   *
   * @param assetHistories Contains the list history data such as: timestamp, priceUsd, etc...
   *
   * @returns `ChartData`
   */
  createChartData: (assetHistories: Array<IAssetHistory>): ChartData => {
    const data = assetHistories.map(({ timestamp, priceUsd }) => ({
      t: timestamp,
      y: priceUsd
    }))

    const chartData: ChartData = {
      datasets: [
        {
          data
        }
      ]
    }

    return chartData
  }
}

export { Chart }
