import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
} from 'react-router-dom'


const Sandwiches = () => <h2>Sandwiches</h2>
const Tacos = ({routes}) => (
	<div>
		<h2>Tacos</h2>

		<ul>
			{routes.map(( {path, name}) => (
				<li><Link to={path}>{name}</Link></li>
			))}
		</ul>

		{routes.map((route) => (
			<RouteWithSubRoutes key={route.path} {...route} />
		))}
	</div>
)


const Bus = () => <h2>Bus</h2>
const Cart = () => <h2>Cart</h2>




//route.js
const routes= [
	{
		path:'/sandwiches',
		component: Sandwiches,
	},
	{
		path:'/tacos',
		component: Tacos,
		routes: [
			{
				name: 'Bus',
				path: '/tacos/bus',
				component: Bus,
			},
			{
				name: 'Cart',
				path: '/tacos/cart',
				component: Cart,
			}
		]
	}
]

const RouteWithSubRoutes = (route) => (
		<Route path={route.path} render={(props) => (
			<route.component {...props} routes={route.routes}
		)} />
	)



class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<ul>
						<li><Link to='/tacos'>Tacos</Link></li>
						<li><Link to='/sandwiches'>Sandwiches</Link></li>
					</ul>

					{routes.map((route) => (
						<RouteWithSubRoutes key={route.path} {...route} }
					))}

				</div>
			</Router>
		);
	}
}

export default App