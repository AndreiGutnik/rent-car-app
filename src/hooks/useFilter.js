import { useSelector } from 'react-redux';
import {
  selectMileageFrom,
  selectRentalPrice,
  selectSelectedBrand,
  selecttMileageTo,
} from 'redux/filter/filter-slice';

export const useFilterCars = () => {
  return {
    rentalPrice: useSelector(selectRentalPrice),
    mileageFrom: useSelector(selectMileageFrom),
    mileageTo: useSelector(selecttMileageTo),
    selectedBrand: useSelector(selectSelectedBrand),
  };
};
