import { configureStore } from '@reduxjs/toolkit'
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux'

import dataSlice from '@/common/slices/data-slice'
import binanceSlice from '@/home/slices/binance-slice'

export const store = configureStore({
  reducer: {
    binanceSlice,
    dataSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
