import styled from 'styled-components';
import { baseTheme } from 'theme';
import { HiX } from 'react-icons/hi';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${baseTheme.colors.overlayBcg};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ModalWrapper = styled.div`
  width: 541px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  border-radius: 24px;
  background-color: ${baseTheme.colors.white};
`;

export const Button = styled.button`
  color: ${baseTheme.colors.white};
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 16);
  padding: 12px 50px;
  border: none;
  border-radius: 12px;
  background-color: ${baseTheme.colors.blue};
  transition: background-color 250ms ${baseTheme.animation.cubicBezier};
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${baseTheme.colors.darkblue};
  }
`;

export const CloseModalIcon = styled(HiX)`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  stroke: #121417;
  cursor: pointer;
`;
