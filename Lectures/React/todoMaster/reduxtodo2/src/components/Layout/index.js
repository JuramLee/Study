// entry 헤더랑 푸터가 합쳐지는 페이지
// 공용 헤더랑 공용 푸터 만드는것

import { Outlet } from "react-router-dom/dist";
import BasicFooter from "./Footer/Footer";
import BasicHeader from "./Header/Header";

function Layout({ children }) {
  return (
    <>
      <BasicHeader />
	  <Outlet />
	  <BasicFooter />
    </>
  );
}

export default Layout;
