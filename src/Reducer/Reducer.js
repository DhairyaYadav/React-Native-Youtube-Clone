import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'yourSliceName',
  initialState: [],
  reducers: {
    add: (state, action) => {
      return action.payload;
    },
  },
});

export const { add } = slice.actions;

export default slice.reducer;
