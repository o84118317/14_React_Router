import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
)

const About = () => (
	<div>
		<h2>About</h2>
	</div>
)


const OldSchooldMenoLink = ({children, to , exact}) => {
	return  (
		<Route path={to} exact={exact} children={({ match }) => (
			<div className={match ? 'active' : ''}>
				{match ? '>' : ''}
				<Link to = {to}>
						{children}
				</Link>
			</div>	
		)}/>
	)
}


const App = () => (
	<Router>
		<div>
			<OldSchooldMenoLink exact={true} to='/'>
				Home
			</OldSchooldMenoLink>
			<OldSchooldMenoLink to='/about'>
				About
			</OldSchooldMenoLink>

			<hr />
			<Route exact path='/' component={Home} />
			<Route path='/about' component={About} />
		</div>	
	</Router>
);

render(<App />, document.getElementById('roots'));