import { configureStore } from '@reduxjs/toolkit'
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux'

import dataSlice from '@/common/ui/slices/data-slice'
import binanceSlice from '@/home/ui/slices/binance-slice'

export const store = configureStore({ reducer: { binanceSlice, dataSlice } })

export type RootState = ReturnType<typeof store.getState>

// eslint-disable-next-line functional/prefer-tacit
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
