import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SubMenu = ({ item, activeMenu, setActiveMenu }) => {
  const [showSubNav, setShowSubNav] = useState(activeMenu.includes(item.path));
  const showSubnav = () => setShowSubNav(!showSubNav);

  return (
    <>
      <SidebarLink to={item.path} onClick={showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>{item.subNav && <>{showSubNav ? item.iconOpened : item.iconClosed}</>}</div>
      </SidebarLink>
      {item.subNav &&
        showSubNav &&
        item.subNav.map((subItem, index) => (
          <DropdownLink
            to={subItem.path}
            key={index}
            active={activeMenu === subItem.path ? "true" : "false"}
            onClick={() => setActiveMenu(subItem.path)}
          >
            {subItem.icon}
            <SidebarLabel>{subItem.title}</SidebarLabel>
          </DropdownLink>
        ))}
    </>
  );
};

export default SubMenu;

const SidebarLink = styled(Link)`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 50px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: green;
    border-left: 4px solid greenyellow;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: ${({ active }) => (active === "true" ? "green" : "gray")};
  height: 50px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 18px;

  &:hover {
    background: green;
    cursor: pointer;
  }
`;
