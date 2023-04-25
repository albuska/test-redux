import { configureStore } from '@reduxjs/toolkit';
import { myValueSlice} from './myValue/slice';
import { itemsSlice } from './items/items'; 
import { userSlice } from './userSlice';

export const store = configureStore(
  {
    reducer: {
      myValue: myValueSlice.reducer,
      items: itemsSlice.reducer,
      user: userSlice.reducer, 
    },
  }
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// export const store = configureStore(
//   {
//     reducer: {
//       myValue: myReducer,
//     },
//   },
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// В будь-якому компоненті, де нам треба це використати
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from './myValue/slice';

// const dispatch = useDispatch();
// const value = useSelector(state => state.myValue);
// console.log(value);

{
  /* <button onClick={() => dispatch(increment(100))}>Increment</button>
<button onClick={() => dispatch(decrement())}>Decrement</button>  */
}
