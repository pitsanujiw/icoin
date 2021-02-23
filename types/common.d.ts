import { IAsset } from 'types'

export type TSymbol = Pick<IAsset, 'symbol' | 'name'>

export interface ICommonProps {
  loading: boolean
}

export interface IEdgeNode<T> {
  node: T
}
