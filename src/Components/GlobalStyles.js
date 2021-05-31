import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";

const GlobalStyle = css`
    ${emotionReset}
    body {
        font-family: "Noto Sans KR", sans-serif;
        line-height: 1.4;
        font-size: 16px;
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

function GlobalStyles() {
    return (
        <Global
            styles={css`
                ${GlobalStyle}
            `}
        />
    );
}

export default GlobalStyles;
