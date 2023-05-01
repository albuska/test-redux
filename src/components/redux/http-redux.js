// const tasksSlice = {
//   name: 'tasks',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     fetchingInProgress(state) {
//       state.isLoading = true;
//     },
//     fetchingSuccess(state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     fetchingError(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// };
// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   tasksSlice.actions;

//   Асинхронний Redux
import { createSlice } from '@reduxjs/toolkit';
// Імпортуємо операцію
import { fetchTasks } from './operations';
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // Додаємо обробку зовнішніх екшенів
  extraReducers: {
    [fetchTasks.pending](state) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      // state.items = action.payload;
      state.items.push(action.payload);
    },
    [fetchTasks.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const tasksReducer = tasksSlice.reducer;

// *********************************************
// import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import { fetchBooks } from '/operations';

// const entities = createReducer([], {
//   [fetchBooks.fulfilled]: (_, action) => action.payload,
// });

// const isLoading = createReducer(false, {
//   [fetchBooks.pending]: () => true,
//   [fetchBooks.fulfilled]: () => false,
//   [fetchBooks.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [fetchBooks.rejected]: (_, action) => action.payload,
//   [fetchBooks.pending]: () => null,
// });

// export default combineReducers({
//   entities,
//   isLoading,
//   error,
// });
