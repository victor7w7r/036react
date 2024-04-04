import {
  createAsyncThunk,
  createSlice,
  type PayloadAction
} from '@reduxjs/toolkit'

import type { RootState } from '../../../core/modules/store-module'
import { type Binance, errorBinance } from '../models'
import { getBitcoin } from '../services'

const initialState: {
  data: Binance
  error: string | undefined
  loading: boolean
} = {
  data: errorBinance,
  // eslint-disable-next-line no-undefined
  error: undefined,
  loading: false
}

export const fetchCoins = createAsyncThunk('binance/fetchCoins', () =>
  getBitcoin()
)

export const binanceSlice = createSlice({
  extraReducers: builder => {
    builder.addCase(fetchCoins.pending, state => {
      state.loading = true
    })
    builder.addCase(
      fetchCoins.fulfilled,
      (state, action: PayloadAction<Binance>) => {
        state.loading = false
        state.data = action.payload
      }
    )
    builder.addCase(fetchCoins.rejected, (state, action) => {
      state.loading = false
      state.data = errorBinance
      state.error = action.error.message
    })
  },
  initialState,
  name: 'binance',
  reducers: {}
})

export const binanceSelector = (state: RootState) => state.binanceSlice
export default binanceSlice.reducer
