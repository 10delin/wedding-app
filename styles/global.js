import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlobalStyles = createGlobalStyle`
  html, body, #__next {
    height: 100%;
    margin: 0;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Caudex', serif; 
  }
`;

export default GlobalStyles;