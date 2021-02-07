import { PER_PAGE } from 'data'
import { IAPI } from 'types/api'
import axios from 'axios'

const CoingeckoAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_COINGECKO_API
})

const CoinCapAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_COINCAP_API
})

const API: IAPI = {
  getGlobals: () => CoingeckoAPI.get('/global'),

  getAssets: (
    params = {
      limit: PER_PAGE
    }
  ) =>
    CoinCapAPI.get('/assets', {
      params
    })
}

export { API }
