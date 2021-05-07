/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Component } from "react";
import Router from "Components/Router";

import { Global, jsx, css } from "@emotion/react";

import emotionReset from "emotion-reset";

import Header from "Components/Header";

import WebFont from "webfontloader";

WebFont.load({
  custom: {
    families: ["Noto Sans KR"],
    urls: [
      "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    ],
  },
});

const GlobalStyle = css`
  ${emotionReset}
  body {
    font-family: "Noto Sans KR", sans-serif;
    line-height: 1.4;
    font-size: 16px;
  }
  * {
    box-sizing: border-box;
  }
  table {
    width: 100%;
  }
  img {
    max-width: 100%;
    vertical-align: top;
  }
`;


class App extends Component {
  render() {
    return (
      <>
        <Global
          styles={css`
          ${GlobalStyle}
        `}
        />
        <Header />
        <Router />
      </>
    );
  }
}

export default App;