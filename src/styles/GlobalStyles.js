import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--white);
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    height: 100%;
    width: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: --apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  :root {
    --primary: #000;
    --yellow: #FFCB05;
    --blue: #3D7DCA;
    --navy-blue: #003A70;
    --red: #FF0000;
    --boston-red: #CC0000;
  }
`;
