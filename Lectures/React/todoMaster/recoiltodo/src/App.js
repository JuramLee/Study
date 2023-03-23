import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";

import theme from "./styles/theme";
import router from "./routes/routing";
import AuthProvider from "contexts/auth";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  // 옵션/ 기본설정/ config
  // defaultOptions: {
  //   queries: {
  //     cacheTime:
  //     staleTime:
  //   }

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <GlobalStyles />
            <RouterProvider router={router} />
          </AuthProvider>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
export default App;
