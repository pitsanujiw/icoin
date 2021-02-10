import { IAsset } from 'types'

export type TTime = '1D' | '1W' | '1M' | '3M' | '6M' | '1Y' | 'ALL'

export type TInterval = 'm5' | 'm30' | 'h2' | 'h6' | 'h12' | 'd1'

export type TOnTimeChange = (time: TTime) => void

export interface ICalculateInterval {
  id: string

  interval: TInterval

  start: number

  end: number
}

export interface ITime {
  onTimeChange: TOnTimeChange

  time: TTime
}

export interface IAssetHistory {
  date: string

  priceUsd: number

  timestamp: number
}

export interface IAssetHistory {
  assetHistories: Array<IAssetHistory>

  asset: Pick<IAsset, 'name' | 'symbol' | 'changePercent24Hr'>
}
