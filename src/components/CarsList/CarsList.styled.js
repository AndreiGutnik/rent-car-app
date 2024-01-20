import styled from 'styled-components';

export const ListWrap = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  row-gap: 50px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    column-gap: 28px;
  }

  @media screen and (min-width: 1440px) {
    column-gap: 29px;
  }
`;
