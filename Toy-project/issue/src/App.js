import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from './Store/store';
import router from './Route/routing';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
