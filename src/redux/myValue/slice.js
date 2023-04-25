import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

export const myValueSlice = createSlice({
  name: 'myValue',
  initialState: 0,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  },
});


export const { increment, decrement } = myValueSlice.actions;

// export const increment = createAction('myValue/increment');
// console.log(increment());
// export const decrement = createAction('myValue/decrement');

// const myReducer = createReducer(0, {
//     [increment]: (state, action) => state + action.payload,
//     [decrement]: (state, action) => state - action.payload,
// });
