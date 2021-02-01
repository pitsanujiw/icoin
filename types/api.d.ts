import { AxiosResponse } from 'axios'
import { IGlobal, IAssetParams, IAssetResponse } from 'types'

export interface IAPI {
  getGlobals: () => Promise<AxiosResponse<IGlobal>>

  getAssets: (params?: IAssetParams) => Promise<AxiosResponse<IAssetResponse>>
}
