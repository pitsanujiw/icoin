const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const numberFormatter = new Intl.NumberFormat('en-US')

const percentFormatter = new Intl.NumberFormat('en-US', {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

const Format = {
  currency: (value: number) => formatter.format(value),

  percent: (value: number) => percentFormatter.format(value / 100),
}

export { Format, numberFormatter, percentFormatter }
