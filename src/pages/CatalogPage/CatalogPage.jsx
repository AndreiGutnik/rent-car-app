import { CarsList } from 'components/CarsList/CarsList';
import { CatalogWrap } from './CatalogPage.styled';
import { useCars } from 'hooks/useCars';
import Loader from 'components/Loader/Loader';
import { Error } from 'components/Error/Error.styled';
import { ScrollUp } from 'components/ScrollUp/ScrollUp';
import { animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';

const { Container } = require('components/Container');

const CatalogPage = () => {
  const { isLoader, isError } = useCars();
  const [isScrollUp, setIsScrollUp] = useState(false);

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

  return (
    <Container onWheel={onScroll}>
      <CatalogWrap>
        <CarsList />
      </CatalogWrap>
      {isLoader && <Loader />}
      {isError && !isLoader && (
        <Error>
          <p>OOPS! There was an ERROR!</p>
        </Error>
      )}
      {isScrollUp && <ScrollUp onClick={onScrollUp} />}
    </Container>
  );
};

export default CatalogPage;
