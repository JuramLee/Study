import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import Main from '../Pages//Main/main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Main />,
      },
    ],
  },
]);

export default router;
