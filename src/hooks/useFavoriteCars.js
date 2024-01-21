import { useSelector } from 'react-redux';
import {
  selectFavoriteCars,
  selectFavoriteEroor,
  selectFavoriteLoading,
} from 'redux/favoriteCar/favoriteCar-slice';

export const useFavoriteCars = () => {
  return {
    favoriteCars: useSelector(selectFavoriteCars),
    isLoading: useSelector(selectFavoriteLoading),
    isError: useSelector(selectFavoriteEroor),
  };
};
