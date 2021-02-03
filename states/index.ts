import { createStore, combineReducers } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import Prices from 'states/prices'

const reducers = combineReducers({
  prices: Prices
})

const store = createStore(reducers, composeWithDevTools())

export default store
