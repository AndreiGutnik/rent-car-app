import styled from 'styled-components';
import { HiChevronUp } from 'react-icons/hi';
import { baseTheme } from 'theme';

export const ScrollUpStyled = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 54px;
  height: 54px;
  padding: 15px;
  background-color: ${baseTheme.colors.blue};
  border-radius: 50%;
  box-shadow: 0px 0px 0 5px rgba(79, 46, 232, 0.3);
  transition: scale 250ms ${baseTheme.animation.cubicBezier};
  cursor: pointer;

  &:hover,
  &:focus {
    scale: 1.1;
  }
`;

export const ScrollUpIcon = styled(HiChevronUp)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 36px;
  height: 36px;
  fill: ${baseTheme.colors.white};
`;
