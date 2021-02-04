import { TTime, TInterval } from 'types'

export const DURATION = 250

export const TIME: Array<TTime> = ['1D', '1W', '1M', '3M', '6M', '1Y', 'ALL']

export const TIME_TO_INTERVAL: Record<TTime, TInterval> = {
  '1D': 'm5',
  '1W': 'm30',
  '1M': 'h2',
  '3M': 'h6',
  '6M': 'h12',
  '1Y': 'd1',
  ALL: 'd1'
}
