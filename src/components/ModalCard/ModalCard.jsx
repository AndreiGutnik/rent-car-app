import {
  InfoWrap,
  ImageThumb,
  MainInfo,
  Description,
  AccessoriesWrap,
  Options,
} from './ModalCard.styled';

export const ModalCard = ({ car }) => {
  const {
    id,
    year,
    make,
    model,
    img,
    rentalPrice,
    address,
    type,
    mileage,
    accessories,
    functionalities,
    description,
    rentalConditions,
    fuelConsumption,
    engineSize,
  } = car;
  const addrArray = address.split(',');
  const country = addrArray[addrArray.length - 1];
  const city = addrArray[addrArray.length - 2];

  return (
    <>
      <ImageThumb>
        <img src={img} alt={`${make} ${model}`} />
      </ImageThumb>
      <InfoWrap>
        <h1>
          {`${make} `}
          <span>{`${model}, `}</span>
          {year}
        </h1>
        <MainInfo>
          <p>{city}</p>
          <p>{country}</p>
          <p>{`Id: ${id}`}</p>
          <p>{`Year: ${year}`}</p>
          {/* <p>{rentalCompany}</p> */}
          <p>{`Type: ${type}`}</p>
        </MainInfo>
        <MainInfo>
          <p>{`Fuel Consumption: ${fuelConsumption}`}</p>
          <p>{`Engine Size: ${engineSize}`}</p>
        </MainInfo>
        <Description>{description}</Description>
        <h2>Accessories and functionalities:</h2>
        <AccessoriesWrap>
          {accessories.map(item => (
            <p>{item}</p>
          ))}
        </AccessoriesWrap>
        <AccessoriesWrap>
          {functionalities.map(item => (
            <p>{item}</p>
          ))}
        </AccessoriesWrap>
        <h2>Rental Conditions: </h2>
        <Options>
          {rentalConditions.split('\n').map(item => (
            <p>{item}</p>
          ))}
          <p>
            Mileage: <span>{mileage}</span>
          </p>
          <p>
            Price: <span>{rentalPrice}</span>
          </p>
        </Options>
      </InfoWrap>
    </>
  );
};
