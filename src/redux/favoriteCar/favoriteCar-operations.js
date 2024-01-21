import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65a8288b94c2c5762da862cc.mockapi.io';

export const getCarById = createAsyncThunk(
  'cars/getCarById',
  async (car, thunkAPI) => {
    try {
      return car;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteCarById = createAsyncThunk(
  'cars/deleteCarById',
  async (car, thunkAPI) => {
    try {
      return car;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
