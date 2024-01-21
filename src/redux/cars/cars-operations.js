import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65a8288b94c2c5762da862cc.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/getCars',
  async (query, thunkAPI) => {
    const params = new URLSearchParams({
      page: query.page,
      limit: query.limit,
    });

    try {
      const { data } = await axios.get(`/api/cars?${params}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const updateFavoriteCar = createAsyncThunk(
//   'cars/patchFavoriteCar',
//   async ({ changeValues, id }, thunkAPI) => {
//     try {
//       const { data } = await axios.put(`/api/cars?id=${id}`, changeValues);
//       console.log(data);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
