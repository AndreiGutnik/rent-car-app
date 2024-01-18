import { HomeWrap } from './HomePage.styled';

const { Container } = require('components/Container');

const HomePage = () => {
  return (
    <Container>
      <HomeWrap>
        <h1>Home page</h1>
      </HomeWrap>
    </Container>
  );
};

export default HomePage;
