import styled from 'styled-components';
import { baseTheme } from 'theme';

export const ImageThumb = styled.div`
  overflow: hidden;
  position: relative;
  width: 461px;
  height: 248px;
  border-radius: 14px;
  background: ${baseTheme.colors.borderGrey};

  & img {
    width: 461px;
    min-height: 248px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const InfoWrap = styled.div`
  padding: 14px 0 28px 0;

  & h1 {
    color: ${baseTheme.colors.black};
    font-size: 18px;
    font-weight: 500;
    line-height: calc(24 / 18);
    text-align: left;
    margin-bottom: 8px;
  }

  & span {
    color: ${baseTheme.colors.blue};
  }

  & h2 {
    color: ${baseTheme.colors.black};
    font-size: 14px;
    font-weight: 500;
    line-height: calc(20 / 14);
    text-align: left;
    margin-top: 24px;
    margin-bottom: 8px;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* row-gap: 4px; */
  margin-bottom: 4px;

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

export const Description = styled.p`
  margin-top: 14px;
`;

export const AccessoriesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* row-gap: 4px; */
  margin-bottom: 4px;

  & p {
    color: rgba(18, 20, 23, 0.5);
    font-size: 12px;
    line-height: calc(18 / 12);
  }

  & p:not(:last-child) {
    padding-right: 6px;
  }

  & p:not(:first-child) {
    padding-left: 6px;
    border-left: 1px solid rgba(18, 20, 23, 0.1);
  }
`;

export const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  gap: 8px;

  & p {
    padding: 7px 14px;
    border-radius: 35px;
    background: #f9f9f9;
    font-family: 'Montserrat', sans-serif;
    color: #363535;
    font-size: 12px;
    line-height: calc(18 / 12);
    letter-spacing: -0.24px;
  }

  & span {
    color: ${baseTheme.colors.blue};
    font-weight: 600;
  }
`;
