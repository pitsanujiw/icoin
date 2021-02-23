import { IEdgeNode, IAsset, IExchangeNode } from 'types'

export type TSearchAssetNode = Pick<IAsset, 'id' | 'symbol' | 'name'>

export type TSearchExchangeNode = Pick<IExchangeNode, 'id' | 'name'>

export interface ISearchAssets {
  edges: Array<IEdgeNode<TSearchAssetNode>>
}

export interface ISearchExchanges {
  edges: Array<IEdgeNode<TSearchExchangeNode>>
}

export interface ISearchResponse {
  assets: ISearchAssets

  exchanges: ISearchExchanges
}
