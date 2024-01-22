import { CarItem } from 'components/CarItem/CarItem';
import { ListWrap } from './CarsList.styled';

export const CarsList = ({ filteredCars }) => {
  // const { cars } = useCars();
  return (
    <ListWrap>
      {filteredCars.map(car => (
        <CarItem key={car.id} car={car} />
      ))}
    </ListWrap>
  );
};
