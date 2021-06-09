import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    font-family: "Noto Sans KR", sans-serif;
    line-height: 1.4;
    font-size: 16px;
    color: #fff;
    background-color: rgba(20, 20, 20, 1);
  }
  * {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  table {
    width: 100%;
  }
  img {
    max-width: 100%;
    vertical-align: top;
  }
`;

export default GlobalStyles;
