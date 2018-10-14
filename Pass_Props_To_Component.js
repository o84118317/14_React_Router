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
