import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Provider } from './components/Provider';
import { Toaster } from './components/Toaster';
import { routes } from './routes';
import { Home } from './screens/Home';
import { NotFound } from './screens/NotFound';

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider>
				<Layout>
					<BrowserRouter>
						<Routes>
							<Route path={routes.home} element={<Home />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
					</BrowserRouter>
					<Toaster />
				</Layout>
			</Provider>
		</QueryClientProvider>
	);
};

export default App;
