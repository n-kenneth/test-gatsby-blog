import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  html, body {
    font-size: 10px;
  }
  body {
    padding: 70px;
  }
  h1, h2, h3, h4, h5 {
    font-family: PlayFairBold;
  }
  a {
    text-decoration: none;
    color: #333;
  }
  p {
    font-family: PlayFairRegular;
  }
  ul, li {
    list-style: none;
  }
`
export default GlobalStyles
