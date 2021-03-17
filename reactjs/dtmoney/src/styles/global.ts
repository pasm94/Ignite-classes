import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #e52e4d;
    --blue: #5429cc;
    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969db3;

    --background: #f0f2f5;
    --shape: #ffffff;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    /* font-size = 16px em desktop */
    @media (max-width: 1080px) {
      font-size: 93.75%;
      /* font-size = 15px */
      /* usar % pra variar caso o usuario tenha configs especificas no seu dispositivo */
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
      /* font-size = 14px */
    }
    /* REM => 1rem = font-size */
  }
  
  body {
    background: var(---background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
