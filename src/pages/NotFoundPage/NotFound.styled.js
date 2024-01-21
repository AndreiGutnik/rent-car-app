import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { baseTheme } from 'theme';

export const PageWrap = styled.div`
  padding: 30px 0;

  & img {
    display: block;
    margin: 0 auto 24px auto;
    max-width: 270px;

    @media screen and (min-width: 768px) {
      max-width: 600px;
    }
  }
`;

export const ButtonLink = styled(Link)`
  display: block;
  width: 224px;
  margin: 0 auto;
  padding: 12px 16px;
  color: ${baseTheme.colors.white};
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
  text-align: center;
  border: transparent;
  border-radius: 12px;
  background-color: ${baseTheme.colors.blue};
  cursor: pointer;
  transition: background-color 250ms ${baseTheme.animation.cubicBezier};

  &:hover,
  &:focus {
    background-color: ${baseTheme.colors.darkblue};
  }
`;
