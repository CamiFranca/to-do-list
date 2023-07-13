import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
    font-family: 'Lato', sans-serif;
    color: #000;
  }

  body{
    /* overflow-y: hidden; */
  }

  h1{
    font-size: 32px;
    font-weight: 900;
  }

  h2{
    font-size: 24px;
    font-weight: 700;
  }
  
  h3{
    font-size: 16px;
    font-weight: 700;
  }

  p{
    font-size: 16px;
    font-weight: 300;
  }
`