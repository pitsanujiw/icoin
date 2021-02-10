import { IPageInfo } from 'types'

export interface IExchangeParams {
  direction: string

  first: number

  sort: string
}

export interface INode {
  id: string

  name: string

  percentTotalVolume: number

  rank: number

  topPairBaseSymbol: string

  topPairQuoteSymbol: string

  tradingPairs: number

  updatedAt: number

  volumeUsd24Hr: number
}

export interface IEdgeNode {
  node: INode
}

export interface IExchanges {
  edges: Array<IEdgeNode>

  pageInfo: IPageInfo
}

export interface IExchangeResponse {
  exchanges: IExchanges
}
