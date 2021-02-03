import { IAsset } from 'types'

export interface IAssetSummaryData extends IAsset {
  website: string
}

export interface IAssetSummary {
  asset: IAssetSummaryData
}
