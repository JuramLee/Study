import { Route, RouterProvider } from "react-router-dom";
import router from "routes/routing";
import { ThemeProvider } from "styled-components";
import HomePage from "./pages/Home";
import TodoPage from "./pages/Todo";
import GlobalStyles from "./styles/global";
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />

    {/* <BrowserRouter>
    <GlobalStyles/>
    HTML5를 지원하는 브라우저 주소를 감지
      <Routes>
      Route path와 감지한 주소가 일치한 router만을 랜더링 시켜주는 역할
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </BrowserRouter> */}
    </ThemeProvider>
  );
}

export default App;