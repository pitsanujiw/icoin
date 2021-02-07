import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGlobal, IGlobalData } from 'types'

const initialState: Partial<IGlobal> = {}

const globals = createSlice({
  name: 'Globals',
  initialState,
  reducers: {
    updateGlobal: (state, action: PayloadAction<IGlobalData>) => {
      state.data = action.payload
    }
  }
})

export const { updateGlobal } = globals.actions
export default globals.reducer
