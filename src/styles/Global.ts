import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  @media(max-width: 1080px) {html {font-size: 93.75%;}}
  @media(max-width: 720px) {html {font-size: 87.5%;}}

  body {
    background-color: #f8f8f8;
    color: #29292e;
  }

  body, input, button, textarea {
    font: 400 1rem 'Roboto', sans-serif;
  }


`
