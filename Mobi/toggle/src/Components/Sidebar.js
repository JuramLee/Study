import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { SidebarData } from '../Components/SidebarData';

const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const [data, setData] = useState(SidebarData);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  // useEffect(() => {
  //   const stored = sessionStorage.getItem('storedData');
  //   setData(stored);
  // }, []);

  const onClickParentToggle = (path) => {
    const dataCopy = data.map((el) => {
      return {
        ...el,
        isToggled: el.path === path,
      };
    });
    setData(dataCopy);
  };

  const onClickChildToggle = (path) => {
    const dataCopy = data.map((el) =>
      el.subNav?.map((child) => {
        return {
          ...el,
          ...child,
          isChecked: child.path === path,
        };
      })
    );
    setData(dataCopy);
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {data.map((item, index) => {
              return (
                <SubMenu
                  item={item}
                  key={index}
                  activeMenu={activeMenu}
                  setActiveMenu={setActiveMenu}
                  onClickParentToggle={onClickParentToggle}
                  onClickChildToggle={onClickChildToggle}
                />
              );
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;
