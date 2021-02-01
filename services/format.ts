import { formatCurrency } from '@coingecko/cryptoformat'
import numeral from 'numeral'

const numberFormatter = new Intl.NumberFormat('en-US')

const percentFormatter = new Intl.NumberFormat('en-US', {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

const Format = {
  bigNumber: (value: number) => numeral(value).format('($0.00a)'),

  currency: (value: number) => formatCurrency(value, 'USD', 'en'),

  percent: (value: number) => percentFormatter.format(value / 100),
}

export { Format, numberFormatter, percentFormatter }
