import styled from 'styled-components';
import { baseTheme } from 'theme';

export const ItemWrap = styled.li`
  flex-basis: calc((100% - 3 * 29px) / 4);

  & img {
    width: 274px;
    height: 268px;

    border-radius: 14px;
    background: ${baseTheme.colors.borderGrey};
  }
`;

export const InfoWrap = styled.div`
  padding: 14px 0 28px 0;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px 99px;
  color: ${baseTheme.colors.white};
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
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
