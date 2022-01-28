import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
  body {
    font-family: "Roboto", sans-serif;
  }
  /* App fit Height */
  html,
  body,
  #__next {
    min-height: 100vh;
    display: flex;
    flex: 1;
  }
  #__next {
    flex: 1;
  }
  #__next > * {
    flex: 1;
  }
  /* ./App fit Height */

  .spinner {
    animation: spin infinite 1.5s linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
