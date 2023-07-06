import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router';
import { styled } from 'styled-components';
import Sidebar from '../Sidebar';

const Layout = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const savedActiveMenu = sessionStorage.getItem('activeMenu');
    savedActiveMenu && setActiveMenu(savedActiveMenu);
  }, []);

  useEffect(() => {
    sessionStorage.setItem('activeMenu', activeMenu);
  }, [activeMenu]);

  useEffect(() => {
    setActiveMenu(null);
  }, [location]);

  return (
    <Wrapper>
      <SidebarWrapper>
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </SidebarWrapper>
      <Outlet />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: black;
`;

const SidebarWrapper = styled.div`
  background-color: #333;
`;
