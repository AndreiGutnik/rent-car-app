import { CarsList } from 'components/CarsList/CarsList';
import { ScrollUp } from 'components/ScrollUp/ScrollUp';
import { useFavoriteCars } from 'hooks/useFavoriteCars';
import { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import NoData from 'images/no data.png';
import { FavoritesWrap } from './FavoritesPage.styled';

const { Container } = require('components/Container');

const FavoritesPage = () => {
  const [isScrollUp, setIsScrollUp] = useState(false);
  const { favoriteCars } = useFavoriteCars();

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
      <FavoritesWrap>
        {favoriteCars.length > 0 ? (
          <CarsList cars={favoriteCars} />
        ) : (
          <img src={NoData} alt="No data" />
        )}
      </FavoritesWrap>
      {isScrollUp && <ScrollUp onClick={onScrollUp} />}
    </Container>
  );
};

export default FavoritesPage;
