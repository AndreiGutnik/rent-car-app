import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import { baseTheme } from '../theme';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	body {
		font-family: "Manrope", sans-serif;
		font-size: 14px;
		font-weight: 400;
		font-style: normal;
		-webkit-tap-highlight-color: transparent;
		-moz-tap-highlight-color: transparent;
		color: ${baseTheme.colors.black};
		background-color: ${baseTheme.colors.white};  
		margin: 0;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}

	a {
		text-decoration: none;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin-top: 0;
		margin-bottom: 0;
	}

	h1, h2 {
		text-align: center;
		margin-bottom: 24px;
	}

	ul {
		margin-top: 0;
		margin-bottom: 0;
		padding-left: 0;
		text-decoration: none;
	}

	li {
		list-style: none;
	}

	img {
		display: block;
		max-width: 100%;
		height: auto;
	}

	input,
	button,
	label {
		display: block;
	}
`;
