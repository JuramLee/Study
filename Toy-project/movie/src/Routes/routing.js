import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import Main from "../Pages/Main";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: "/", element: <Main /> }],
  },
]);

export default router;
