import { IAssetHistory } from 'types'
import { maxBy, minBy } from 'lodash'

const Price = {
  priceIterate: (history: IAssetHistory): number => history.priceUsd,

  max: (histories: IAssetHistory[]): number =>
    maxBy(histories, Price.priceIterate).priceUsd,

  min: (histories: IAssetHistory[]): number =>
    minBy(histories, Price.priceIterate).priceUsd
}

export { Price }
