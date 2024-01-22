import { createSlice } from '@reduxjs/toolkit';

const filterCarsSlice = createSlice({
  name: 'filterCars',
  initialState: {
    brand: '',
    rentalPrice: '',
    mileageFrom: '',
    mileageTo: '',
    selectedBrand: '',
  },
  reducers: {
    setFilter(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    selectBrand(state, action) {
      state.selectedBrand = action.payload;
    },
  },
});

export const { setFilter, selectBrand } = filterCarsSlice.actions;

export const filterCarsReducer = filterCarsSlice.reducer;

export const selectRentalPrice = state => state.filterCars.rentalPrice;
export const selectMileageFrom = state => state.filterCars.mileageFrom;
export const selecttMileageTo = state => state.filterCars.mileageTo;
export const selectSelectedBrand = state => state.filterCars.selectedBrand;
