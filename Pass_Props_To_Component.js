import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
} from 'reacct-router-dom'
import Settings from './Settings'
import Dashboard from './Dashboard'
import { fetchSettings, fetchDashboard } from './api'

const routes = [
	{
		path: 'settings',
		component: Setting,
		fetchInitialData: (id) => fetchSettings(id),
	},
	{
		path: '/dashboard',
		component: Dashboard,
		fetchInitialData: (id) => fetchDashboard(id),
	}
]


class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<ul>
						<li><Link to='/settings'>Settings</Link></li>
						<li><Link to='/dashboard'>Dashboard</Link></li>
					</ul>

						{routes.map(({ path, component: C, fetchInitialData}) => (
							<Route
								path={path}
								render={(props) => <C {...props} fetchInitialData={fetch} />}
							/>
						))}
					<hr />


				</div>
			</Router>
		)
	}
}