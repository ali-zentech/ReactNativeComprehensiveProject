import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InnerScreen} from 'react-native-screens';

const InitialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: InitialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByCount: (state, value: PayloadAction<number>) => {
      state.value += value.payload;
    },
  },
});

export const {increment, decrement, incrementByCount} = counterSlice.actions;
export default counterSlice.reducer;
