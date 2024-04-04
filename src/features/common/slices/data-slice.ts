import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  initialState: {
    value: ''
  },
  name: 'data',
  reducers: {
    mutate: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  }
})

export const { mutate } = dataSlice.actions

export default dataSlice.reducer
