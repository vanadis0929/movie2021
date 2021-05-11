/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";

import { Link, withRouter } from "react-router-dom";

import { jsx, css } from "@emotion/react";

const HeaderDiv = css`
    position: sticky;
    left: 0;
    top: 0;
`;

const List = css`
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0 20px;

    > li {
        flex: 0 0 auto;
        margin-right: 20px;
        color: #fff;

        > a {
            display: block;
            padding: 5px 10px;
            border-bottom: 5px solid
                ${(props) => (props.current ? "#f00" : "transparent")};

            :hover {
                background-color: #00f;
                color: #fff;
            }
        }
    }
`;

const Header = (props) => (
    <header css={HeaderDiv}>
        <nav>
            <ul css={List}>
                <li current={false}>
                    <Link to="/">Movies</Link>
                </li>
                <li current={true}>
                    <Link to="/tv">TV</Link>
                </li>
                <li current={false}>
                    <Link to="/search">Search</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default withRouter(Header);
