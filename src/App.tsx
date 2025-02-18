import { Suspense } from 'react';
import { Routes, Route } from 'react-router';

import './App.css';
import BaseLayout from './layouts/BaseLayout';

const HomePage = lazy(() => import('./pages/dashboard/home'));
const UserPage = lazy(() => import('./pages/system/user'));

function RouteNode() {
	return (
		<Routes>
			<Route path='dashboard'>
				<Route index path='home' element={<HomePage />} />
			</Route>
			<Route path='system'>
				<Route index path='user' element={<UserPage />} />
			</Route>
		</Routes>
	);
}

function App() {
	return (
		<>
			<Suspense>
				<BaseLayout content={<RouteNode />}></BaseLayout>
			</Suspense>
		</>
	);
}

export default App;
