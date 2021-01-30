import { AxiosResponse } from 'axios'
import { IGlobal } from 'types/global'

export interface IAPI {
  getGlobals: () => Promise<AxiosResponse<IGlobal>>
}
