/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";

import { jsx, css } from "@emotion/react";

const List = css`
    display: flex;
    align-items: center;
    text-align: center;

    > li {
        flex: 1 1 auto;
        font-size: 2rem;

        > a {
            display: block;

            :hover {
                background-color: #00f;
                color: #fff;
            }
        }
    }
`;

export default () => (
    <header>
        <ul css={List}>
            <li>
                <a href="/">Movies</a>
            </li>
            <li>
                <a href="/tv">TV</a>
            </li>
            <li>
                <a href="/search">Search</a>
            </li>
        </ul>
    </header>
);
