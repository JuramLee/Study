import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { SidebarData } from "../Constants/SidebarData";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const location = useLocation();

  const [activeMenu, setActiveMenu] = useState(location.pathname);

  useEffect(() => {
    sessionStorage.setItem("activeMenu", location.pathname);
    setActiveMenu(location.pathname);
  }, [location]);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={() => setSidebar(true)} />
          </NavIcon>
        </Nav>
        {sidebar && (
          <SidebarNav>
            <SidebarWrap>
              <NavIcon to="#">
                <AiIcons.AiOutlineClose onClick={() => setSidebar(false)} />
              </NavIcon>
              {SidebarData.map((data, index) => {
                return (
                  <SubMenu
                    item={data}
                    key={index}
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                  />
                );
              })}
            </SidebarWrap>
          </SidebarNav>
        )}
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
  height: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: 350ms;
  z-index: 10;
  overflow-y: auto;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;
