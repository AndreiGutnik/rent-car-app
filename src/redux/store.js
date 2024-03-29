import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { carsReducer } from './cars/cars-slice';
import { favoriteCarsReducer } from './favoriteCar/favoriteCar-slice';
import { filterCarsReducer } from './filter/filter-slice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favoriteCars: favoriteCarsReducer,
    filterCars: filterCarsReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
