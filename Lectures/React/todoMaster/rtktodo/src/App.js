import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';

import theme from './styles/theme';
import router from './routes/routing';
import { Provider } from 'react-redux';
import { worker } from '__mock__/browser';
import { store } from 'store/store';

function App() {
	// const store = createConfig();
	// npx msw init public/
	if (process.env.NODE_ENV === 'development') {
		worker.start();
	}

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<RouterProvider router={router} />
			</ThemeProvider>
		</Provider>
	);
}
export default App;
