import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 0 16px;
  outline: 1px solid red;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 128px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 128px;
  }
`;