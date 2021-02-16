import { createStore, combineReducers } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import Prices from 'states/prices'
import GlobalData from 'states/global'

const reducers = combineReducers({
  prices: Prices,
  globalData: GlobalData
})

const store = createStore(reducers, composeWithDevTools())

export default store
