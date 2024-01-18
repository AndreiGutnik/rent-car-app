import { useSelector } from 'react-redux';
import { selectCars, selectEroor, selectLoading } from 'redux/cars/cars-slice';

export const useCars = () => {
  return {
    cars: useSelector(selectCars),
    isLoader: useSelector(selectLoading),
    isError: useSelector(selectEroor),
  };
};
