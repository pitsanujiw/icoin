import { ILivePrices, IGlobal } from 'types'

export interface IRootStore {
  prices: ILivePrices

  globals: IGlobal
}
