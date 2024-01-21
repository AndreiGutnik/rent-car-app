import { Modal } from 'components/Modal/Modal';
import {
  InfoWrap,
  ItemWrap,
  Button,
  ImageThumb,
  Title,
  Description,
  ButtonFavorites,
} from './CarItem.styled';
import { useState } from 'react';
import Icons from 'images/iconSprite.svg';
import { useDispatch } from 'react-redux';
import {
  getCarById,
  deleteCarById,
} from 'redux/favoriteCar/favoriteCar-operations';
import { useFavoriteCars } from 'hooks/useFavoriteCars';

export const CarItem = ({ car }) => {
  const [isOpenModal, setisOpenModal] = useState(false);
  const dispatch = useDispatch();
  const { favoriteCars } = useFavoriteCars();
  const {
    id,
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
  const isFavoriteCar = favoriteCars.some(car => car.id === id);

  const handleOpen = () => {
    setisOpenModal(true);
  };

  const handleClose = () => {
    setisOpenModal(false);
  };

  const handleFavoriteCar = () => {
    if (!isFavoriteCar) {
      dispatch(getCarById(car));
    } else {
      dispatch(deleteCarById(car));
    }
  };
  return (
    <>
      <ItemWrap>
        <ImageThumb>
          <img src={img} alt={`${make} ${model}`} />
          <ButtonFavorites type="button" onClick={handleFavoriteCar}>
            {!isFavoriteCar ? (
              <svg>
                <use href={Icons + '#hart'}></use>
              </svg>
            ) : (
              <svg>
                <use href={Icons + '#hartActive'}></use>
              </svg>
            )}
          </ButtonFavorites>
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
        <Button type="button" onClick={handleOpen}>
          Learn more
        </Button>
      </ItemWrap>
      <Modal car={car} isOpen={isOpenModal} onClose={handleClose} />
    </>
  );
};
