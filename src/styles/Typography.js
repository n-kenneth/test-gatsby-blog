import { createGlobalStyle } from "styled-components"

import playFairRegular from "../assets/fonts/PlayfairDisplay-Regular.ttf"
import playFairBold from "../assets/fonts/PlayfairDisplay-Bold.ttf"
import ubuntuRegular from "../assets/fonts/Ubuntu-Regular.ttf"

const Typography = createGlobalStyle`
  @font-face {
    font-family: PlayFairRegular;
    src: url(${playFairRegular});
  }
  @font-face {
    font-family: PlayFairBold;
    src: url(${playFairBold});
  }
  @font-face {
    font-family: UbuntuRegular;
    src: url(${ubuntuRegular});
  }
  html {
    font-family: PlayFairRegular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #626262;
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
`
export default Typography
