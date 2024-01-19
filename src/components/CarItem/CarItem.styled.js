import styled from 'styled-components';
import { baseTheme } from 'theme';

export const ItemWrap = styled.li`
  flex-basis: calc((100% - 3 * 29px) / 4);

  & img {
    width: auto;
    height: 268px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ImageThumb = styled.div`
  overflow: hidden;
  position: relative;
  width: 274px;
  height: 268px;
  border-radius: 14px;
  background: ${baseTheme.colors.borderGrey};
`;

export const InfoWrap = styled.div`
  padding: 14px 0 28px 0;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

  & p {
    color: ${baseTheme.colors.black};
    font-size: 16px;
    font-weight: 500;
    line-height: calc(24 / 16);
  }

  & span {
    color: ${baseTheme.colors.blue};
  }
`;

export const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 4px;

  & p {
    color: rgba(18, 20, 23, 0.5);
    font-size: 12px;
    line-height: calc(18 / 12);
  }

  & p:not(:last-child) {
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }

  & p:not(:first-child) {
    padding-left: 6px;
  }
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
