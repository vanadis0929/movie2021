/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Component } from "react";
import Router from "Components/Router";

import { jsx } from "@emotion/react";

import GlobalStyles from "Components/GlobalStyles";

import WebFont from "webfontloader";

WebFont.load({
    custom: {
        families: ["Noto Sans KR"],
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
