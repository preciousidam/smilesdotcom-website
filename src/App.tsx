import React, {lazy} from 'react';
import './styles/App.scss';
import ErrorBoundary from './components/errorboundary';
import AppNavigation  from './components/navigation';
import { CustomRoute } from './components/navigation/routes';

const routes = [
	{
		path: '/about',
		component: lazy(() => import('./pages/about'))
	},
	{
		path: '/foundation',
		component: lazy(() => import('./pages/foundation'))
	},
	{
		path: '/special-packages',
		component: lazy(() => import('./pages/packages'))
	},
	{
		path: '/services',
		component: lazy(() => import('./pages/service'))
	},
	{
		path: '/',
		component: lazy(() => import('./pages'))
	},
]


function App() {
	return (
		<div className="App">
			<ErrorBoundary>
				<AppNavigation>
					{routes.map((route, i) => <CustomRoute key={i} {...route} />)}
				</AppNavigation>
			</ErrorBoundary>
		</div>
	);
}

export default App;
