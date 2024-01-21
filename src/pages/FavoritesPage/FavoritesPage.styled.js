import styled from 'styled-components';

export const FavoritesWrap = styled.div`
  padding: 25px 0;

  & img {
    display: block;

    margin: 0 auto;
    max-width: 270px;

    @media screen and (min-width: 768px) {
      max-width: 700px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 80px 0;
  }

  @media screen and (min-width: 1440px) {
    padding: 150px 0;
  }
`;
