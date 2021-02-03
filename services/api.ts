import axios from 'axios'
import { IAPI } from 'types/api'

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
      limit: 30
    }
  ) =>
    CoinCapAPI.get('/assets', {
      params
    })
}

export { API }
