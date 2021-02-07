import { createStore, combineReducers } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import Prices from 'states/prices'
import Globals from 'states/globals'

const reducers = combineReducers({
  prices: Prices,
  globals: Globals
})

const store = createStore(reducers, composeWithDevTools())

export default store
