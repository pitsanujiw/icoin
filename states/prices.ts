import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILivePrices } from 'types'

const initialState: ILivePrices = { data: {} }

const Prices = createSlice({
  name: 'Prices',
  initialState,
  reducers: {
    updatePrice: (state, action: PayloadAction<Record<string, number>>) => {
      state.data = action.payload
    }
  }
})

export const { updatePrice } = Prices.actions
export default Prices.reducer
