import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import Main from '../Pages/Main';
import Detail from '../Pages/Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'detail/:id',
        element: <Detail />,
      },
    ],
  },
]);

export default router;
