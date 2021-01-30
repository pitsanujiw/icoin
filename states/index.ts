import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import Prices from 'states/prices'

const reducers = combineReducers({
  prices: Prices,
})

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger))
)

export default store
