export const handleCarsPanding = state => {
  state.isLoading = true;
  state.cars = [];
};

export const handleCarsFulfilled = (state, action) => {
  state.isLoading = false;
  state.isError = null;
  state.cars = [...state.cars, ...action.payload];
};

export const handleCarsRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};
