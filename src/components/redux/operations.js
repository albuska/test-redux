// import axios from 'axios';
// axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';
// const fetchTasks = () => async dispatch => {
//   try {
//     const response = await axios.get('/tasks');
//   } catch (e) {}
// };

// ******************************************************
// import axios from 'axios';
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from './tasksSlice';
// axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

// export const fetchTasks = () => async dispatch => {
//   try {
//     // Індикатор завантаження
//     dispatch(fetchingInProgress());
//     // HTTP-запит
//     const response = await axios.get('/tasks');
//     // Обробка даних
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     // Обробка помилки
//     dispatch(fetchingError(e.message));
//   }
// };

// CreateAsyncThunk()
// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';
// export const fetchTasks = createAsyncThunk('tasks/fetchAll', async () => {
//   const response = await axios.get('/tasks');
//   return response.data;
// });

// ++++++++++++
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';
export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Додавання завдання 
export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Видалення завдання
export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);