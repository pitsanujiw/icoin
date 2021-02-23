import { IEdgeNode, IPageInfo } from 'types'

export interface IBaseNode {
  id: string

  updatedAt: number | string

  volumeUsd24Hr: number
}

export interface IExchangeParams {
  direction: string

  first: number

  sort: string
}

export interface IExchangeAssetParams extends IExchangeParams {
  assetId: string
}

export interface IExchangeNode extends IBaseNode {
  name: string

  percentTotalVolume: number

  rank: number

  topPairBaseSymbol: string

  topPairQuoteSymbol: string

  tradingPairs: number
}

export interface IAssetNode extends IBaseNode {
  baseSymbol: string

  exchangeId: string

  exchangeName: string

  percentVolume: number

  priceUsd: number

  quoteSymbol: string
}

export interface IExchanges<T> {
  edges: Array<T>

  pageInfo: IPageInfo
}

export interface IExchangeResponse {
  exchanges: IExchanges<IEdgeNode<IExchangeNode>>
}

export interface IExchangeAssetResponse {
  assetMarkets: IExchanges<IEdgeNode<IAssetNode>>
}
