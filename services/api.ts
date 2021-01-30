import axios from 'axios'
import { IAPI } from 'types/api'

const CoingeckoAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_COINGECKO_API,
})

const API: IAPI = {
  getGlobals: () => CoingeckoAPI.get('/global'),
}

export { API }
