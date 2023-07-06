import { createBrowserRouter } from "react-router-dom";

import Team from "../Pages/Team";
import { Reports, ReportsOne, ReportsThree, ReportsTwo } from "../Pages/Reports";
import Layout from "../Components/Layout";
import Products from "../Pages/Products";
import { Overview, Revenue, Users } from "../Pages/Overview";
import { Messages, MessagesOne, MessagesTwo } from "../Pages/Message";
import Support from "../Pages/Support";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/overview/users",
        element: <Users />,
      },
      {
        path: "/overview/revenue",
        element: <Revenue />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/reports/reports1",
        element: <ReportsOne />,
      },
      {
        path: "/reports/reports2",
        element: <ReportsTwo />,
      },
      {
        path: "/reports/reports3",
        element: <ReportsThree />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/messages/message1",
        element: <MessagesOne />,
      },
      {
        path: "/messages/message2",
        element: <MessagesTwo />,
      },
      {
        path: "/support",
        element: <Support />,
      },
    ],
  },
]);
