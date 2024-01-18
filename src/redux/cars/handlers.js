export const handlePanding = state => {
  state.isLoading = true;
};

export const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.isError = null;
  state.cars = action.payload;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};
