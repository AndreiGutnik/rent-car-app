export const handleFavoriteCarsPanding = state => {
  state.isLoading = true;
};

export const handleFavoriteCarsFulfilled = (state, action) => {
  state.isLoading = false;
  state.isError = null;
  state.favoriteCars = [...state.favoriteCars, action.payload];
};

export const handleFavoriteCarsRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

export const handleDeleteFavoriteCarsFulfilled = (state, action) => {
  state.isLoading = false;
  state.isError = null;
  state.favoriteCars = state.favoriteCars.filter(
    car => car.id !== action.payload.id
  );
};
