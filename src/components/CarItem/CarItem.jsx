import {
  InfoWrap,
  ItemWrap,
  Button,
  ImageThumb,
  Title,
  Description,
} from './CarItem.styled';

export const CarItem = ({ car }) => {
  const {
    year,
    make,
    model,
    img,
    rentalPrice,
    rentalCompany,
    address,
    type,
    mileage,
    functionalities,
  } = car;
  const addrArray = address.split(',');
  const country = addrArray[addrArray.length - 1];
  const city = addrArray[addrArray.length - 2];

  return (
    <ItemWrap>
      <ImageThumb>
        <img src={img} alt={`${make} ${model}`} />
      </ImageThumb>
      <InfoWrap>
        <Title>
          <p>
            {`${make} `}
            <span>{`${model}, `}</span>
            {year}
          </p>
          <p>{rentalPrice}</p>
        </Title>
        <Description>
          <p>{city}</p>
          <p>{country}</p>
          <p>{rentalCompany}</p>
          <p>{type}</p>
          <p>{model}</p>
          <p>{mileage}</p>
          <p>{functionalities[0]}</p>
        </Description>
      </InfoWrap>
      <Button type="button">Learn more</Button>
    </ItemWrap>
  );
};
