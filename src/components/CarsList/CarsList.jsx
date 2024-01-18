import { CarItem } from 'components/CarItem/CarItem';
import { useCars } from 'hooks/useCars';
import { ListWrap } from './CarsList.styled';

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
