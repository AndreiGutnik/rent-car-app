import { CarsList } from 'components/CarsList/CarsList';
import { CatalogWrap } from './CatalogPage.styled';
import { useCars } from 'hooks/useCars';
import Loader from 'components/Loader/Loader';
import { Error } from 'components/Error/Error.styled';
import { ScrollUp } from 'components/ScrollUp/ScrollUp';
import { animateScroll as scroll } from 'react-scroll';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCars } from 'redux/cars/cars-operations';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
import { Filter } from 'components/Filter/Filter';
import { setFilter } from 'redux/filter/filter-slice';
import { useFilterCars } from 'hooks/useFilter';
const { Container } = require('components/Container');

const limitItems = 12;

const CatalogPage = () => {
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [page, setPage] = useState(1);
  const { cars, isLoading, isError } = useCars();
  const dispatch = useDispatch();
  const { rentalPrice, mileageFrom, mileageTo, selectedBrand } =
    useFilterCars();

  useEffect(() => {
    dispatch(fetchCars({ page, limit: limitItems }));
  }, [dispatch, page]);

  const onScrollUp = () => {
    scroll.scrollToTop();
    setIsScrollUp(false);
  };

  const onScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > 300) {
      setIsScrollUp(true);
    } else {
      setIsScrollUp(false);
    }
  };

  const onClick = () => {
    setPage(prevpage => prevpage + 1);
    scroll.scrollToBottom();
  };

  const brands = [...new Set(cars.map(car => car.make))];

  const filteredCars =
    (cars || []).filter(car => {
      const brandCondition = !selectedBrand || car.make === selectedBrand.value;

      const priceCondition =
        !rentalPrice ||
        (parseFloat(car.rentalPrice.replace('$', '')) >=
          parseFloat(rentalPrice) &&
          parseFloat(car.rentalPrice.replace('$', '')) <
            parseFloat(rentalPrice) + 10);

      const mileageFromCondition =
        !mileageFrom || parseFloat(car.mileage) >= parseFloat(mileageFrom);

      const mileageToCondition =
        !mileageTo || parseFloat(car.mileage) <= parseFloat(mileageTo);

      return (
        brandCondition &&
        priceCondition &&
        mileageFromCondition &&
        mileageToCondition
      );
    }) || [];

  return (
    <Container onWheel={onScroll}>
      <CatalogWrap>
        <Filter
          brands={brands}
          onFilterChange={newFilters => {
            setPage(1);
            dispatch(setFilter(newFilters));
          }}
        />
        {filteredCars.length > 0 ? (
          <CarsList filteredCars={filteredCars} />
        ) : (
          <Error>No cars yet</Error>
        )}
        {!(cars.length % limitItems) && cars.length !== 0 ? (
          <LoadMoreButton isLoading={isLoading} onClick={onClick} />
        ) : null}
      </CatalogWrap>
      {isLoading && <Loader />}
      {isError && !isLoading && (
        <Error>
          <p>OOPS! There was an ERROR!</p>
        </Error>
      )}
      {isScrollUp && <ScrollUp onClick={onScrollUp} />}
    </Container>
  );
};

export default CatalogPage;
