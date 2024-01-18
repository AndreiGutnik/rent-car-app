// import { Container } from 'components/Container';
// import { Link } from 'react-router-dom';
import { routes } from 'routes';
import Logo from 'images/logo.png';
import { LinkLogo, LinkNav, Navigation, NavWrap } from './Header.styled';

export const Header = () => {
  return (
    <Navigation>
      <LinkLogo to={routes.HOME}>
        <img src={Logo} alt="rental car logo" />
        <p>Rental car</p>
      </LinkLogo>
      <NavWrap>
        <LinkNav to={routes.HOME}>Home</LinkNav>
        <LinkNav to={routes.CATALOG}>Catalog</LinkNav>
        <LinkNav to={routes.FAVORITES}>Favoriter</LinkNav>
      </NavWrap>
    </Navigation>
  );
};
