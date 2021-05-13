/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Component } from "react";
import Router from "Components/Router";

import { jsx } from "@emotion/react";

import GlobalStyles from "Components/GlobalStyles";

import WebFont from "webfontloader";

//import api from "Components/api";

WebFont.load({
  custom: {
    families: ["Noto Sans KR"],
    rel: "preload",
    as: "style",
    urls: [
      "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    ],
  },
});

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />

        <Router />
      </>
    );
  }
}

export default App;
