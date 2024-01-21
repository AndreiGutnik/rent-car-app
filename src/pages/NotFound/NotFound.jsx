import { Container } from 'components/Container';
import NotFound404 from 'images/404NotFound.jpg';
import { ButtonLink, PageWrap } from './NotFound.styled';
import { routes } from 'routes';

const NotFound = () => {
  return (
    <Container>
      <PageWrap>
        <img src={NotFound404} alt="Not found" />
        <ButtonLink to={routes.HOME}>Home page</ButtonLink>
      </PageWrap>
    </Container>
  );
};

export default NotFound;
