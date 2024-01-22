import styled from 'styled-components';
import { baseTheme } from 'theme';

export const FilterWrap = styled.div`
  display: flex;
  align-items: start;
  justify-content: left;
  flex-direction: column;
  column-gap: 18px;
  row-gap: 12px;
  padding-bottom: 24px;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: row;
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

export const SelectWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
`;

const inputStyles = `
	display: flex;
	width: 160px;
	height: 48px;
	padding: 14px 93px 14px 24px;
	align-items: center;
	flex-shrink: 0;  
  border: none;
  background-color: ${baseTheme.colors.darkwhite};
  padding-left: 24px;  
  
	&:focus {
    outline-color: rgba(138, 138, 137, 0.2);
  }

	&::placeholder{
		color: ${baseTheme.colors.black};
		font-size: 18px;
		font-weight: 500;
		line-height: calc(20 / 18);
	}
`;

export const InputFrom = styled.input`
  ${inputStyles}
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
`;

export const InputTo = styled.input`
  ${inputStyles}
  border-radius: 0px 14px 14px 0px;
`;

export const SearchButton = styled.button`
  width: 136px;
  padding: 14px;
  margin-top: auto;
  margin-bottom: 0;
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
