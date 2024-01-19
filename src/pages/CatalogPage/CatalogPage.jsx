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
const { Container } = require('components/Container');

const limitItems = 12;

const CatalogPage = () => {
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [page, setPage] = useState(1);
  const { cars, isLoading, isError } = useCars();
  const dispatch = useDispatch();

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

  return (
    <Container onWheel={onScroll}>
      <CatalogWrap>
        {cars.length > 0 ? <CarsList /> : <Error>No cars yet</Error>}
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
