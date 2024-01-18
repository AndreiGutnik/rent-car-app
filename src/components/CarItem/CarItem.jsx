import { InfoWrap, ItemWrap, Button } from './CarItem.styled';

export const CarItem = ({ car }) => {
  const { year, make, model, img } = car;

  return (
    <ItemWrap>
      <img src={img} alt={`${make} ${model}`} />
      <InfoWrap>
        <p>{make}</p>
        <p>{model}</p>
        <p>{year}</p>
      </InfoWrap>
      <Button type="button">Learn more</Button>
    </ItemWrap>
  );
};
