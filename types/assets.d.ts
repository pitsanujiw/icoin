export interface IAssetParams {
  search?: string

  ids?: string

  limit?: number

  offset?: number
}

export interface IAsset {
  changePercent24Hr: number

  explorer: string

  id: string

  marketCapUsd: number

  maxSupply: number

  name: string

  priceUsd: number

  rank: number

  supply: number

  symbol: string

  volumeUsd24Hr: number

  vwap24Hr: number
}

export interface IAssetResponse {
  timestamp: number

  data: Array<IAsset>
}
