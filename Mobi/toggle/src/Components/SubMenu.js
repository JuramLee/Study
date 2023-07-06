import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SubMenu = ({
  item,
  activeMenu,
  setActiveMenu,
  onClickParentToggle,
  onClickChildToggle,
}) => {
  const [subnav, setSubnav] = useState(false);

  useEffect(() => {
    const savedActiveMenu = sessionStorage.getItem('activeMenu');
    savedActiveMenu && setActiveMenu(savedActiveMenu) && setSubnav(true);
  }, []);

  const showSubnav = () => setSubnav(!subnav);

  const handleMenuClick = (menuId) => {
    if (activeMenu === menuId) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuId);
    }
  };

  return (
    <>
      {item.isToggled ? (
        <SidebarLinkChecked
          to={item.path}
          onClick={() => {
            if (item.subNav) {
              showSubnav();
            }
            onClickParentToggle(item.path);
          }}
          active={activeMenu === item.path}>
          <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </div>
          <div>
            {subnav && item.subNav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </SidebarLinkChecked>
      ) : (
        <SidebarLink
          to={item.path}
          onClick={() => {
            if (item.subNav) {
              showSubnav();
            }
            onClickParentToggle(item.path);
          }}
          active={activeMenu === item.path}>
          <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </div>
          <div>
            {subnav && item.subNav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </SidebarLink>
      )}
      {subnav &&
        item.subNav.map((subItem, index) => {
          return (
            <DropdownLink
              to={subItem.path}
              key={index}
              active={activeMenu == subItem.path}>
              {subItem.icon}
              <SidebarLabel
                onClick={() => {
                  handleMenuClick(subItem.path);
                  onClickChildToggle(subItem.path);
                }}>
                {subItem.title}
              </SidebarLabel>
            </DropdownLink>
          );
        })}
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
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: green;
    border-left: 4px solid greenyellow;
    cursor: pointer;
  }
`;

const SidebarLinkChecked = styled(Link)`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  background: green;
  border-left: 4px solid greenyellow;
  cursor: pointer;
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: gray;
  height: 60px;
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

const DropdownLinkChecked = styled(Link)`
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 18px;
  background: green;
  cursor: pointer;
`;
