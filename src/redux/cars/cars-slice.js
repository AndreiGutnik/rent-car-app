import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './cars-operations';
import {
  handleCarsFulfilled,
  handleCarsPanding,
  handleCarsRejected,
} from './handlers';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    isLoading: false,
    isError: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, handleCarsPanding)
      .addCase(fetchCars.fulfilled, handleCarsFulfilled)
      .addCase(fetchCars.rejected, handleCarsRejected);

    // .addCase(updateFavoriteCar.pending, handleCarsPanding)
    // .addCase(updateFavoriteCar.fulfilled, handleFavoriteCarFulfilled)
    // .addCase(updateFavoriteCar.rejected, handleCarsRejected);
  },
});

export const carsReducer = carsSlice.reducer;

export const selectCars = state => state.cars.cars;
export const selectLoading = state => state.cars.isLoading;
export const selectEroor = state => state.cars.isError;

// export const selectFilteredContacts = createSelector(
//   [selectCars, selectFilter],
//   (cars, filter) => {
//     return cars.filter(
//       car =>
//         car.name.toLowerCase().includes(filter.toLowerCase()) ||
//         car.number.includes(filter)
//     );
//   }
// );
