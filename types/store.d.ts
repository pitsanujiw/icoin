import { ILivePrices, IGlobalData } from 'types'

export interface IRootStore {
  prices: ILivePrices

  globalData: IGlobalData
}
