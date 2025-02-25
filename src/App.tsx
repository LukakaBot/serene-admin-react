import { Suspense } from 'react';
import { Routes, Route } from 'react-router';

import './App.css';
import BaseLayout from './layouts/BaseLayout';

const LoginPage = lazy(() => import('./pages/login'));
const HomePage = lazy(() => import('./pages/dashboard/home'));
const UserPage = lazy(() => import('./pages/system/user'));

function RoutesNode() {
	return (
		<Routes>
			<Route path='login' element={<LoginPage />} />
			<Route element={<BaseLayout />}>
				<Route path='dashboard'>
					<Route index path='home' element={<HomePage />} />
				</Route>
				<Route path='system'>
					<Route index element={<UserPage />} />
					<Route path='user' element={<UserPage />} />
				</Route>
			</Route>
		</Routes>
	);
}

function App() {
	return (
		<Suspense>
			<RoutesNode />
		</Suspense>
	);
}

export default App;
