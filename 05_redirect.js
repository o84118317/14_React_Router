import React from 'react'
import { saveUser } from './api'
import Form from '.Form'
import { Redirect } from 'react-router-dom'


// First Way


class Register extends React.component {
	state = {
		toDashboard: false,
	}
	handleSubmit = (user) => {
		saveUser(user)
			.then(() => this.setState(() => ({
				toDashboard:true	 		 	
		 	})))
	}

	render () {
		if (this.state.toDashboard === true) {
			<Redirect to='/dashboard' />
		}


		return (
			<div>
				<h1>Register</h1>
				<Form onSubmit={this.handleSubmit} />
			</div>
		)
	}
}

export default Register

// Second Way
import React from 'react'
import { saveUser } from './api'
import Form from '.Form'
import { withRouter } from 'react-router-dom'

class Register extends React.component {

	handleSubmit = (user) => {
		saveUser(user)
			.then(() => this.props.history.push('/dashboard'))
	}

	render () {
		return (
			<div>
				<h1>Register</h1>
				<Form onSubmit={this.handleSubmit} />
			</div>
		)
	}
}
export default withRouter(Register)