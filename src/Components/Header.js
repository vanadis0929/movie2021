/** @jsxRuntime classic */
/** @jsx jsx */

import { Link, withRouter } from "react-router-dom";

import { jsx } from "@emotion/react";
import styled from "@emotion/styled";

const Header = styled.header`
    position: sticky;
    left: 0;
    top: 0;
`;

const List = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0 20px;
`;

const Item = styled.li`
    flex: 0 0 auto;
    margin-right: 20px;
    color: #fff;
    border-bottom: 5px solid
        ${(props) => (props.active ? "#f00" : "transparent")};
    transition: all 0.5s;
    font-size: ${(props) => (props.active ? "120%" : "")};
`;

const ItemLink = styled(Link)`
    display: block;
    padding: 5px 10px;

    &:hover {
        background-color: #00f;
        color: #fff;
    }
`;

export default withRouter(({ location: { pathname } }) => (
    <Header>
        {console.log(pathname)}
        <nav>
            <List>
                <Item active={pathname === "/"}>
                    <ItemLink to="/">Movies</ItemLink>
                </Item>
                <Item active={pathname === "/tv"}>
                    <ItemLink to="/tv">TV</ItemLink>
                </Item>
                <Item active={pathname === "/search"}>
                    <ItemLink to="/search">Search</ItemLink>
                </Item>
            </List>
        </nav>
    </Header>
));
