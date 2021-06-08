/** @jsxRuntime classic */
/** @jsx jsx */

// import NavMenu from "Components/NavMenu";

import { Link, withRouter } from "react-router-dom";

import { jsx } from "@emotion/react";
import styled from "@emotion/styled";

const Header = styled.header`
  position: sticky;
  left: 0;
  top: 0;
  background-color: rgba(20, 20, 20, 1);
  z-index: 100;
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0 20px;
`;

const MenuItem = styled.li`
  flex: 0 0 auto;
  margin-right: 20px;
  color: #fff;
  border-bottom: 5px solid ${(props) => (props.active ? "#f00" : "transparent")};
  transition: all 0.5s;
  font-size: ${(props) => (props.active ? "120%" : "")};
`;

const MenuItemLink = styled(Link)`
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
      <MenuList>
        <MenuItem active={pathname === "/"}>
          <MenuItemLink to="/">Movies</MenuItemLink>
        </MenuItem>
        <MenuItem active={pathname === "/tv"}>
          <MenuItemLink to="/tv">TV</MenuItemLink>
        </MenuItem>
        <MenuItem active={pathname === "/search"}>
          <MenuItemLink to="/search">Search</MenuItemLink>
        </MenuItem>
      </MenuList>
    </nav>
  </Header>
));
