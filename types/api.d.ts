import { AxiosResponse } from 'axios'
import { IGlobal, IAssetParams, IAssetResponse } from 'types'

export interface IAPI {
  /**
   *
   * @description Get global data such as: Cryptocurrencies, markets, maret cap, 24h volume, dominance
   *
   * @returns `Promise<AxiosResponse<IGlobal>>`
   */
  getGlobals: () => Promise<AxiosResponse<IGlobal>>

  /**
   * @description Get list asset such as: Bitcoin, Ethereum, etc...
   *
   * @param `IAssetParams`
   *
   * @returns `Promise<AxiosResponse<IAssetResponse>>`
   */
  getAssets: (
    params: Partial<IAssetParams>
  ) => Promise<AxiosResponse<IAssetResponse>>
}
