import styled from 'styled-components';
import { baseTheme } from 'theme';

export const FilterWrap = styled.div`
  padding-bottom: 24px;

  @media screen and (min-width: 768px) {
    padding-bottom: 50px;
  }
`;

export const Label = styled.label`
  display: block;
  color: ${baseTheme.colors.grey};
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);
  margin-bottom: 8px;
`;
