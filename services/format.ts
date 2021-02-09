import { formatCurrency } from '@coingecko/cryptoformat'
import { cloneDeep, set } from 'lodash'
import numeral from 'numeral'

const numberFormatter = new Intl.NumberFormat('en-US')

const percentFormatter = new Intl.NumberFormat('en-US', {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

const Format = {
  bigNumber: (value: number): string => numeral(value).format('($0.00a)'),

  currency: (value: number): string => formatCurrency(value, 'USD', 'en'),

  percent: (value: number): string => percentFormatter.format(value / 100),

  // eslint-disable-next-line @typescript-eslint/ban-types
  toNumber: <T extends Object>(data: Array<T>, keys: Array<keyof T>): T[] => {
    const cloneData = cloneDeep(data)

    const newData: Array<T> = cloneData.map(object => {
      keys.forEach(key => {
        const value = Number(object[key])
        set(object, key, value)
      })

      return object
    })

    return newData
  }
}

export { Format, numberFormatter, percentFormatter }
