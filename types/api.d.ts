import { AxiosResponse } from 'axios'
import { IAssetParams, IAssetResponse } from 'types'

export interface IAPI {
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
