import { createSlice } from '@reduxjs/toolkit';
import { getCarById, deleteCarById } from './favoriteCar-operations';
import {
  handleFavoriteCarsFulfilled,
  handleFavoriteCarsPanding,
  handleFavoriteCarsRejected,
  handleDeleteFavoriteCarsFulfilled,
} from './handlers';

const favoriteCarsSlice = createSlice({
  name: 'favoriteCars',
  initialState: {
    favoriteCars: [],
    isLoading: false,
    isError: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getCarById.pending, handleFavoriteCarsPanding)
      .addCase(getCarById.fulfilled, handleFavoriteCarsFulfilled)
      .addCase(getCarById.rejected, handleFavoriteCarsRejected)

      .addCase(deleteCarById.pending, handleFavoriteCarsPanding)
      .addCase(deleteCarById.fulfilled, handleDeleteFavoriteCarsFulfilled)
      .addCase(deleteCarById.rejected, handleFavoriteCarsRejected);
  },
});

export const favoriteCarsReducer = favoriteCarsSlice.reducer;

export const selectFavoriteCars = state => state.favoriteCars.favoriteCars;
export const selectFavoriteLoading = state => state.favoriteCars.isLoading;
export const selectFavoriteEroor = state => state.favoriteCars.isError;
