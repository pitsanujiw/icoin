import { TTime, TInterval } from 'types'

export const DEVELOPER_IN = 'https://www.linkedin.com/in/andy-d-ng-7a283a65/'

export const GITHUB = 'https://github.com/andyngdz/icoin'

export const PER_PAGE = 50

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
