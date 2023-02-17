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
      {/* {children} */}
      {/* routing.js에서 {children} 으로 보내고 이 파일에서 children으로 받던걸 <Outlet/>으로 바꾸면 Layout에 있는 children을 주소에 맞게 가지고 온다*/}
	    <BasicFooter />
    </>
  );
}

export default Layout;
