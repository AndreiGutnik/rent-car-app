import { CarItem } from 'components/CarItem/CarItem';
import { ListWrap } from './CarsList.styled';
import { useCars } from 'hooks/useCars';

export const CarsList = () => {
  const { cars } = useCars();
  return (
    <ListWrap>
      {cars.map(car => (
        <CarItem key={car.id} car={car} />
      ))}
    </ListWrap>
  );
};
