import { Format } from 'services'
import { IAPI, IAssetResponse } from 'types'
import { PER_PAGE } from 'data'
import axios from 'axios'

const CoinCapAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_COINCAP_API
})

const API: IAPI = {
  getAssets: async (
    params = {
      limit: PER_PAGE
    }
  ) => {
    const response = await CoinCapAPI.get<IAssetResponse>('/assets', {
      params
    })
    const { data } = response.data

    response.data.data = Format.toNumbers(data, [
      'rank',
      'marketCapUsd',
      'priceUsd',
      'volumeUsd24Hr',
      'changePercent24Hr',
      'supply',
      'maxSupply',
      'vwap24Hr'
    ])

    return response
  }
}

export { API }
