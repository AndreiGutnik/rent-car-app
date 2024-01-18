import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65a8288b94c2c5762da862cc.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/getCars',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/cars');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// const params = new URLSearchParams({
//   _limit: perPage,
//   _page: page,
// });

// const response = await axios.get(
//   `https://jsonplaceholder.typicode.com/posts?${params}`
// );
