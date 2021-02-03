import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILivePrices } from 'types/prices'

const initialState: ILivePrices = { data: {} }

const prices = createSlice({
  name: 'Prices',
  initialState: initialState,
  reducers: {
    updatePrice: (state, action: PayloadAction<Record<string, number>>) => {
      state.data = action.payload
    }
  }
})

export const { updatePrice } = prices.actions
export default prices.reducer
