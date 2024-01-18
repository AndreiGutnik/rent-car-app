import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { baseTheme } from '../../theme';

export const Navigation = styled.nav`
  width: 320px;
  margin: 0 auto;
  padding: 0 16px;
  border-bottom: 4px solid ${baseTheme.colors.grey};

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 768px;
    padding: 0 44px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 128px;
  }
`;

export const LinkLogo = styled(Link)`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 0;
  cursor: pointer;

  & img {
    height: 48px;
  }

  & p {
    font-size: 18px;
    color: ${baseTheme.colors.darkblue};
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const NavWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  & a {
    position: relative;
    font-size: 18px;
    color: ${baseTheme.colors.darkblue};
    font-weight: 700;
    cursor: pointer;
    padding-top: 8px;
    padding-bottom: 8px;
    transform: scale(1);
    transition: transform 250ms ${baseTheme.animation.cubicBezier};
  }

  & a:hover,
  & a:focus {
    transform: scale(1.1);
  }
`;

export const LinkNav = styled(NavLink)`
  &.active {
    background-color: ${baseTheme.colors.blue};
    color: ${baseTheme.colors.white};
    border-radius: 10px 100px / 120px;
    padding: 8px 20px;
  }
`;
