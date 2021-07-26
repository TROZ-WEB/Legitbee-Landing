import { createGlobalStyle, css } from 'styled-components';

export const Theme = {
	grey: '#57687A',

	primary: '#004080',
	lightPrimary: '#EFF5FC',

	secondary: '#E7A33E',

	boxShadow: '0rem 0rem 0.938rem 0rem rgba(0, 0, 0, 0.1)',

	sm: '36rem', // 576px : phones
	md: '48rem', // 768px : tablet
	lg: '62rem', // 992px
	xl: '75rem', // 1200px <- me
	xxl: '112.5rem', // 1800px
	xxxl: '155rem', // 2480px
};

export const boxShadow = css`
	-webkit-box-shadow: 0rem 0rem 0.063rem 0rem rgba(203, 203, 204, 0.5);
	box-shadow: 0rem 0.063rem 0.313rem 0rem rgba(203, 203, 204, 0.5);
`;

export const noButton = css`
	border: 0rem;
	background-color: transparent;
	padding: 0rem;
	display: flex;
	align-items: center;
`;

export const fontSize = (size, base = 16) => `
    font-size: ${size}px; // older browsers fallback
    font-size: calc(${size / base} * 1rem);
`;

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;
    letter-spacing: -0.002rem;
    ${fontSize(16)};
    color : #57687A;
    margin : 0;
    padding : 0;
  }

  body, html{
    width : 100vw;
    overflow-x: hidden;
    font-size: 100%;

    @media (min-width: 112.5rem) {
      font-size : 110%
    }

    @media (max-width: 48rem) {
      font-size : 80%
    }
  }

  h1 {
    font-family: 'DM Serif Display', serif;
    ${fontSize(55)};
    color: #004080;

    @media (max-width: 48rem) {
      ${fontSize(35)};
    }
  }

  mark {
    background-color: transparent;
    padding: 0;
    font-family: inherit;
    font-size: inherit;
    color: #E7A33E
  }

  h2 {
    font-family: 'DM Serif Display', serif;
    ${fontSize(24)};
    color: #004080;
    margin : 0;

    @media (max-width: 48rem) {
      ${fontSize(20)};
    }
  }

  p {
    margin : 0
  }
`;
