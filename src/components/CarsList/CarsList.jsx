import { CarItem } from 'components/CarItem/CarItem';
import { ListWrap } from './CarsList.styled';

export const CarsList = ({ cars }) => {
  return (
    <ListWrap>
      {cars.map(car => (
        <CarItem key={car.id} car={car} />
      ))}
    </ListWrap>
  );
};
