import { RouterProvider } from "react-router";
import { router } from "./Routes/Routing";
import GlobalStyles from "./Style/global";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
