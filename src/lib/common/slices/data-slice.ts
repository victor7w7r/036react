import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    value: ''
  },
  reducers: {
    mutate: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  }
});

export const { mutate } = dataSlice.actions;

export default dataSlice.reducer;
