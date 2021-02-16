import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGlobalData } from 'types'

const initialState: Partial<IGlobalData> = {}

const GlobalData = createSlice({
  name: 'GlobalData',
  initialState,
  reducers: {
    updateGlobal: (state, action: PayloadAction<IGlobalData>) => {
      state.asset = action.payload.asset
      state.marketTotal = action.payload.marketTotal
    }
  }
})

export const { updateGlobal } = GlobalData.actions
export default GlobalData.reducer
