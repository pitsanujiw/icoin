import { IAsset } from 'types'

export interface IMarketTotal {
  assets: number

  exchangeVolumeUsd24Hr: number

  exchanges: number

  marketCapUsd: number

  markets: number
}

export interface IGlobalData {
  asset?: Pick<IAsset, 'marketCapUsd' | 'priceUsd' | 'volumeUsd24Hr'>

  marketTotal?: IMarketTotal
}
