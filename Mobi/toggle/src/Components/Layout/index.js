import React from "react";
import { Outlet } from "react-router";
import { styled } from "styled-components";
import Sidebar from "../Sidebar";

const Layout = () => {
  return (
    <Wrapper>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <Outlet />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: black;
  position: fixed;
  overflow: hidden;
`;

const SidebarWrapper = styled.div`
  background-color: #333;
`;
